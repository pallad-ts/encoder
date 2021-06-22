import {createHash} from "crypto";
import {Secret} from "@pallad/secret";
import {Hasher} from './Hasher';

export class MD5Hasher implements Hasher<string, string> {
	constructor(private salt?: Secret<string>) {
	}

	hash(input: string): string {
		return createHash('md5')
			.update(input + (this.salt ? this.salt.getValue() : ''))
			.digest('hex');
	}
}
