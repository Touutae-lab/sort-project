export class ArrayMerger {
    // in case of the array is already sorted, so there is no need to sort it again
    merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
        const new_colelciton2: number[] = [];
        for (let i = collection_2.length - 1; i >= 0; i--) {
            new_colelciton2.push(collection_2[i]);
        }
        collection_2 = new_colelciton2;


        let result = this.mergeSortedArray(collection_1, collection_3);

        result = this.mergeSortedArray(result, collection_2);

        return result;
    }


    mergeSortedArray(arr1: number[], arr2: number[]): number[] {
        let mergedArray: number[] = [];

        let i = 0, j = 0;
        
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                mergedArray.push(arr1[i]);
                i++;
            } else {
                mergedArray.push(arr2[j]);
                j++;
            }
        }
        return mergedArray;
    }
}
