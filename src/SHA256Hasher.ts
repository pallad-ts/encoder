import {createHash} from "crypto";
import {Secret} from "@pallad/secret";
import {Hasher} from './Hasher';

export class SHA256Hasher implements Hasher<string, string> {
	constructor(private salt?: Secret<string>) {
	}

	hash(input: string): string {
		return createHash('sha256')
			.update(input + (this.salt ? this.salt.getValue() : ''))
			.digest('hex');
	}
}
