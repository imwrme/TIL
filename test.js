/*
주어진 문자열에서 홀수인 숫자들의 제곱의 합을 출력한다.  
예) "ab2v9bc13j5jf4jv21" -> 9^2 + 13^2 + 5^2 + 21^2 = 716 */


/*

1. 문자열에서 문자인경우 "" 으로 대체한다. regex 이용..
-> https://stackoverflow.com/questions/4537227/javascript-replace-special-chars-with-empty-strings
2. ""을 제거한다.
-> trim 안써두 됨.
3. 남아있는 수 중 홀수를 판별한다.
-> string to array
4. 제곱해서 더한다.
-> pow
5. 출력한다.

*/
 
var testValue ='ab2v9bc13j5jf4jv21';

// var newStr = testValue.replace(/^[a-zA-Z]*$/, ' ');
testValue = testValue.replace(/[a-zA-Z]+/g,'');
console.log(testValue);

var testArr = testValue.split('');
console.log("testArr : "+testArr);

var sum=0;

for(var i=0; i<testArr.length; i++){
	if(testArr[i]%2){
		console.log("testArr["+i+"] :"+testArr[i]+" and it's pow result : "+Math.pow(testArr[i], 2));
		sum+=Math.pow(testArr[i], 2); //testArr[i]*testArr[i];
	}
}

console.log("주어진 문자열에서 홀수인 숫자들의 제곱의 합: "+sum);