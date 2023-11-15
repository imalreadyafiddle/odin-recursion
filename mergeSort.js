// sort the left half of the array (assuming n > 1)
// sort the right half of the array (assuming n > 1)
// merge the two halves together

myArray = [4, 8, 6, 2, 1, 7, 5, 3];

function mergeSortedList(leftList, rightList) {
  let sortedList = []; // create array for sorted items to be pushed into
  while (leftList.length && rightList.length) {
    // while both lists have items
    if (leftList[0] <= rightList[0]) {
      // if item at leftList[0] is less than or equal to item at rightList[0];
      sortedList.push(leftList.shift()); // shift off first element of leftList, add it to the end of sortedList
    } else {
      // otherwise
      sortedList.push(rightList.shift()); // shift off first element of rightList, add it to the end of sortedList
    }
  }
  // add the remaining elements, if any
  if (leftList.length) {
    // if left list has a length
    sortedList = sortedList.concat(leftList); // leftList is concatenated onto end of sortedList
  }
  if (rightList.length) {
    // if right list has a length
    sortedList = sortedList.concat(rightList); // rightList is concatenated onto end of sortedList
  }
  return sortedList; // return sortedList
}
function mergeSort(unsortedList) {
  const list = [...unsortedList]; // cast unsorted list as an array
  // base case
  if (list.length <= 1) {
    return list; // if the list is one item or smaller, congrats, it's sorted
  }
  //otherwise
  const middle = Math.floor(list.length / 2); // find midpoint of array
  const leftList = list.slice(0, middle); // create array of list's left half
  const rightList = list.slice(middle, list.length); // create array of list's right half
  const leftSortedList = mergeSort(leftList); // call mergeSort recursively on left sublist
  const rightSortedList = mergeSort(rightList); // call mergeSort recursively on right sublist
  return mergeSortedList(leftSortedList, rightSortedList); // pass sorted lists into helper merge function.
}

console.log(mergeSort(myArray));
