<div align="center">
<h1>Hasher 🌄</h1>

<p>Simple crypto async hashing api</p>
</div>

---
[![CircleCI](https://circleci.com/gh/pallad-ts/hasher/tree/master.svg?style=svg)](https://circleci.com/gh/pallad-ts/hasher/tree/master)
[![npm version](https://badge.fury.io/js/@pallad%2Fhasher.svg)](https://badge.fury.io/js/@pallad%2Fhasher)
[![Coverage Status](https://coveralls.io/repos/github/pallad-ts/hasher/badge.svg?branch=master)](https://coveralls.io/github/pallad-ts/hasher?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
---

Simple crypto async hashing api with nice [`TextBufferView` API](https://www.npmjs.com/package/@pallad/text-buffer-view)

# SHA

Supports `sha256`, `sha384`, `sha512` algorithms.

```typescript
import { ShaHasher } from '@pallad/hasher';


const hasher = new ShaHasher(256); // or 384, 512

const hash = await hasher.hash(
	TextBufferView.fromString('Hello, world!', 'utf8')
);

hash.toString('hex'); // 315f5bdb76d078c43b8ac0064e4a0164612b1fce77c869345bfc94c75894edd3
```


## Injectability
Since `Hasher` is an abstract class, you can make hasher injectable.

```typescript
import {Hasher} from '@pallad/hasher';
class SomeService {
	constructor(private hasher: Hasher) {}
}
```
