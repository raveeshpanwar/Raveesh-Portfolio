 function al(nums, target) {
    for(var i=0;i<nums.length;i++){
        for(var j=i+1;j<nums.length-1;i++)
            {
                if(nums[i]+nums[j]===target)
                {
                  let sum=[];
                  sum.push([nums[i],nums[j]])
                }
            }return sum;
    }
};
var a=[1,2,3,4,5,6,7,8];
var b=3;
al(a,b);