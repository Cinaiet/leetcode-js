def maxProfit(prices):
    res = 0
    profit = [[0 for i in range(3)] for i in range(len(prices))]

    profit[0][0], profit[0][1], profit[0][2] = 0, -prices[0], 0

    for i in range(1, len(prices)):
        profit[i][0] = profit[i - 1][0]
        profit[i][1] = max(profit[i - 1][1], profit[i-1][0] - prices[i])
        profit[i][2] = profit[i - 1][1] + prices[i]
        res = max(res, profit[i][1], profit[i][0], profit[i][2])
    return res

prices = [7, 1, 5, 3, 6, 4]

temp = maxProfit(prices=prices)
# print(temp)

def findMinVal(arr):
    minVal = arr[0]
    minIndex = 0

    for i, val in enumerate(arr):
        if arr[i] < minVal:
            minVal = arr[i]
            minIndex = i
    return minIndex


def selectSort(arr):
    ret = []
    for i in enumerate(arr):
        minIndex = findMinVal(arr)
        ret.append(arr.pop(minIndex))
    return ret

arrList = [5, 3, 6, 2, 10]

print(selectSort([5, 3, 6, 2, 10]))

# arrList.pop(2)
# print(arrList)