
/**
 * 
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * 如果数组中不存在目标值 target，返回 [-1, -1]
 * 输入：nums = [5,7,7,8,8,10], target = 8
 * 输出：[3,4]
*/


var searchRange = function(nums, target) {
  let len = nums.length
    let arr = [-1, -1]
    if(len <= 0) return arr

    let start = 0, end = len - 1
    while(start < end) {
      let midIndex = start + end >> 1
      if(nums[midIndex] >= target) {
        end = midIndex
      } else {
        start = midIndex + 1
      }
    }
    if(nums[start] != target){
      return arr
    } else {
      arr[0] = start
      start = 0, end = len - 1
      while(start < end) {
        let midIndex = start + end + 1 >> 1 // 加一是为了避免与上面while循环取值一样问题
        if (nums[midIndex] <= target) {
            start = midIndex;
        } else {
            end = midIndex - 1;
        }
      }
      arr[1] = start
      return arr
    }

};