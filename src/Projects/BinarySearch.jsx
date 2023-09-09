function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        return mid; // Target found, return its index
      } else if (nums[mid] < target) {
        left = mid + 1; // Target is on the right half
      } else {
        right = mid - 1; // Target is on the left half
      }
    }
  
    return -1; // Target not found
  }
  
  // Example usage:
  const nums = [-1, 0, 3, 5, 9, 12];
  const target = 9;
  const result = binarySearch(nums, target);
  console.log(result); // Output: 4

  export default binarySearch