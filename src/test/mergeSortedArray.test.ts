import { ArrayMerger } from "../merge";

describe("Merge Sorted Array", () => {
    let arrayMerger: ArrayMerger = new ArrayMerger();

    beforeEach(() => {
        arrayMerger = new ArrayMerger();
    });

    it("should correct 1", () => {
        const collection_1 = [1, 3, 5, 7, 9];
        const collection_2 = [9, 8, 7, 6, 5];
        const collection_3 = [11, 12, 13, 14, 15];

        const result = arrayMerger.merge(collection_1, collection_2, collection_3);

        expect(result).toEqual([1, 3, 5, 5, 6, 7, 7, 8, 9, 9, 11, 12, 13, 14, 15]);
    });

    it("should be correct 2", () => {
        const collection_1 = [1, 3, 5, 7, 9];
        const collection_2 = [10, 8, 7, 6, 5];
        const collection_3 = [11, 12, 13, 14, 15];

        const result = arrayMerger.merge(collection_1, collection_2, collection_3);

        expect(result).toEqual([1, 3, 5, 5, 6, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    });
});