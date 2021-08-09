const {mathOperations} = require('./sum');
    let input1=6
    let input2=5   
   test('addition', () => {
        let result = mathOperations.sum(input1,input2)
        expect(result).toBe(11);
    });        
    test('substraction', () => {
        let result = mathOperations.subs(input1,input2)
        expect(result).toBe(1);    
    });        
//     test('Multiplication', () => {
//         let result = mathOperations.multi(2,4)
//         expect(result).toBe(8);    
    
// });
const {generateText} = require('./sum');

test('output name and age', () => {
    const text=generateText('Amit kumar',22);
    expect(text).toBe('Amit kumar (22 years old)');
    const text2=generateText('Rutuja sawarkar',21);
    expect(text2).toBe('Rutuja sawarkar (21 years old)');
});