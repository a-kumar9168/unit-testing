const mathOperations = {
    sum: function(a,b) {
        return a + b;
    },
    
    subs: function(a,b) {
        return a - b;
    },
    multi: function(a,b) {
        return a * b;
    }
 };
const generateText = (name, age) => {
    return `${name} (${age} years old)`;
  };
module.exports = { mathOperations,generateText}; 

