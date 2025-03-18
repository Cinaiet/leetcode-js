/**
 *
 * 3. 无重复字符的最长子串
 *
 * 输入: s = "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3
 *
 *
 */

const str = "abcabcbb";

var lengthOfLongestSubstring = function (s) {
    let sourceLen = s.length;
    if (!sourceLen) return 0;

    let target = "",
        len = 0,
        index = 0;
    let i = 0;
    for (; i < sourceLen; i++) {
        let temp = s[i];
        if (target.includes(temp)) {
            let tempLen = target.length;
            if (tempLen > len) len = tempLen;
            target = "";
            i = index;
        } else {
            if (target === "") index = i;
            target += temp;
        }
    }
    return target.length > len ? target.length : len;
};

console.log(lengthOfLongestSubstring(str));

function lengthOfLongestSubstring2(str) {
    let arr = [],
        max = 0;

    for (let i = 0; i < str.length; i++) {
        const index = arr.indexOf(str[i]);
        if (index > -1) {
            arr.splice(0, index + 1);
        }
        arr.push(str[i]);
        max = Math.max(arr.length, max);
    }
    return max;
}

var lengthOfLongestSubstring3 = (s) => {
    if (s.length <= 0) return 0;
};
