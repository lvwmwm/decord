// Module ID: 128
// Function ID: 129
// Dependencies: []
// Exports: createEntriesIterator, createKeyIterator, createValueIterator

// Module 128
let c2, c3;


export const createValueIterator = function* createValueIterator(arg0, value) {
  let closure_0 = arg0;
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "+51" };
    }
  } else {
    try {
      let closure_1;
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_1 = 0;
          if (closure_1 >= closure_0.length) {
            c3 = 3;
            return { value: "IconComponent", done: "+51" };
          }
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        closure_1 = closure_1 + 1;
      }
      c2 = 1;
      c3 = 1;
      const obj4 = { value: closure_0[closure_1], done: false };
      return obj4;
    } catch (tmp14) {
      c3 = 3;
      throw tmp14;
    }
  }
};
export const createKeyIterator = function* createKeyIterator(arg0, value) {
  let closure_0 = arg0;
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "+51" };
    }
  } else {
    try {
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          value = 0;
          if (value >= closure_0.length) {
            c3 = 3;
            return { value: "IconComponent", done: "+51" };
          }
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        value = value + 1;
      }
      c2 = 1;
      c3 = 1;
      const obj4 = { value, done: false };
      return obj4;
    } catch (tmp12) {
      c3 = 3;
      throw tmp12;
    }
  }
};
export const createEntriesIterator = function* createEntriesIterator(arg0, value) {
  let closure_0 = arg0;
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "+51" };
    }
  } else {
    try {
      let closure_1;
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_1 = 0;
          if (closure_1 >= closure_0.length) {
            c3 = 3;
            return { value: "IconComponent", done: "+51" };
          }
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        closure_1 = closure_1 + 1;
      }
      const items = [closure_1, closure_0[closure_1]];
      c2 = 1;
      c3 = 1;
      const obj4 = { value: items, done: false };
      return obj4;
    } catch (tmp15) {
      c3 = 3;
      throw tmp15;
    }
  }
};
