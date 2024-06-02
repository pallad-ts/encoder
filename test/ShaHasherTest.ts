import {ShaHasher} from "@src/ShaHasher";
import {TextBufferView} from "@pallad/text-buffer-view";

describe('ShaHasher', () => {
	describe.each<[ShaHasher.Variant]>([
		[256],
		[384],
		[512]
	])('variant %s', (variant) => {
		const hasher = new ShaHasher(variant);
		it('should hash a string', async () => {
			const input = 'd21bdb8e6f6f09a4a99541ab901bc1ed';
			const inputBuffer = TextBufferView.fromString(input, 'hex');

			const result = await hasher.hash(inputBuffer);
			expect(result.toString('hex')).toMatchSnapshot();
		});
	});
});
