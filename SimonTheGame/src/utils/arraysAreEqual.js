/**
 * Сравнивает два массива чисел и возвращает true, если они эквивалентны.
 * @param {number[]} arr1 - Первый массив чисел.
 * @param {number[]} arr2 - Второй массив чисел.
 * @return {boolean} - Результат сравнения (true, если массивы эквивалентны).
 */
export default function arraysAreEqual(arr1, arr2) {
    // if (arr1.length !== arr2.length) {
    //     return false;
    // }

    for (let i = 0; i < arr1.length; i++) {
        if (arr2[i] !== undefined && arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}
