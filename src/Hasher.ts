export interface Hasher<TInput, TOutput> {
	hash(input: TInput): TOutput;
}
