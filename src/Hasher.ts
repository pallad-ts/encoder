import {TextBufferView} from "@pallad/text-buffer-view";

export abstract class Hasher {
	abstract hash(buffer: TextBufferView): Promise<TextBufferView>;
}
