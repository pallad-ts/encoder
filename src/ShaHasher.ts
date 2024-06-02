import {webcrypto} from "node:crypto";
import {Hasher} from './Hasher';
import {TextBufferView} from "@pallad/text-buffer-view/compiled/TextBufferView";

export class ShaHasher extends Hasher {

	constructor(private variant: ShaHasher.Variant = 256) {
		super();
	}

	get algorithm() {
		return `SHA-${this.variant}`;
	}

	async hash(input: TextBufferView): Promise<TextBufferView> {
		const hashed = await webcrypto.subtle.digest(this.algorithm, input.originalArrayBuffer);
		return TextBufferView.fromArrayBuffer(hashed);
	}
}


export namespace ShaHasher {
	export type Variant = 256 | 384 | 512;
}
