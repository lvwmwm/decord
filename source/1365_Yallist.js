// Module ID: 1365
// Function ID: 16362
// Name: Yallist
// Dependencies: []

// Module 1365 (Yallist)
class Yallist {
  constructor(arg0) {
    self = this;
    Yallist = this;
    if (!(this instanceof Yallist)) {
      tmp = Yallist;
      prototype = Yallist.prototype;
      tmp2 = new.target;
      tmp3 = new.target;
      tmp4 = new Yallist();
      tmp5 = tmp4;
      Yallist = tmp4;
      self = tmp4;
    }
    self.tail = null;
    self.head = null;
    self.length = 0;
    if (global) {
      str = "function";
      if ("function" === typeof global.forEach) {
        item = global.forEach((arg0) => {
          tmp4.push(arg0);
        });
      }
      return self;
    }
    if (arguments.length > 0) {
      length = arguments.length;
      for (let num = 0; num < length; num = num + 1) {
        arr = self.push(arguments[num]);
      }
    }
    return;
  }
  removeNode(arg0) {
    self = this;
    if (global.list !== this) {
      tmp2 = globalThis;
      _Error = Error;
      prototype = Error.prototype;
      tmp3 = new.target;
      str = "removing node which does not belong to this list";
      tmp4 = new.target;
      error = new Error("removing node which does not belong to this list");
      tmp6 = error;
      throw error;
    } else {
      ({ next, prev } = global);
      if (next) {
        next.prev = prev;
      }
      if (prev) {
        prev.next = next;
      }
      if (global === self.head) {
        self.head = next;
      }
      if (global === self.tail) {
        self.tail = prev;
      }
      list = global.list;
      list.length = list.length - 1;
      tmp = null;
      global.next = null;
      global.prev = null;
      global.list = null;
      return;
    }
  }
  unshiftNode(arg0) {
    self = this;
    if (global !== this.head) {
      if (global.list) {
        list = global.list;
        removeNodeResult = list.removeNode(global);
      }
      head = self.head;
      global.list = self;
      global.next = head;
      if (head) {
        head.prev = global;
      }
      self.head = global;
      if (!self.tail) {
        self.tail = global;
      }
      self.length = self.length + 1;
    }
    return;
  }
  pushNode(arg0) {
    self = this;
    if (global !== this.tail) {
      if (global.list) {
        list = global.list;
        removeNodeResult = list.removeNode(global);
      }
      tail = self.tail;
      global.list = self;
      global.prev = tail;
      if (tail) {
        tail.next = global;
      }
      self.tail = global;
      if (!self.head) {
        self.head = global;
      }
      self.length = self.length + 1;
    }
    return;
  }
  push() {
    self = this;
    length = arguments.length;
    for (let num = 0; num < length; num = num + 1) {
      tmp = push;
      tmp2 = push(self, arguments[num]);
    }
    return self.length;
  }
  unshift() {
    self = this;
    length = arguments.length;
    for (let num = 0; num < length; num = num + 1) {
      tmp = unshift;
      tmp2 = unshift(self, arguments[num]);
    }
    return self.length;
  }
  pop() {
    self = this;
    if (this.tail) {
      self.tail = self.tail.prev;
      tmp = null;
      if (self.tail) {
        self.tail.next = null;
      } else {
        self.head = null;
      }
      self.length = self.length - 1;
      return self.tail.value;
    } else {
      return;
    }
  }
  shift() {
    self = this;
    if (this.head) {
      self.head = self.head.next;
      tmp = null;
      if (self.head) {
        self.head.prev = null;
      } else {
        self.tail = null;
      }
      self.length = self.length - 1;
      return self.head.value;
    } else {
      return;
    }
  }
  forEach(arg0, arg1) {
    tmp = require;
    self = this;
    if (!require) {
      tmp = self;
    }
    iter = self.head;
    num = 0;
    if (null !== iter) {
      do {
        tmp2 = global;
        tmp3 = tmp;
        tmp4 = num;
        tmp5 = self;
        callResult = global.call(tmp, iter.value, num, self);
        iter = iter.next;
        num = num + 1;
      } while (null !== iter);
    }
    return;
  }
  forEachReverse(arg0, arg1) {
    tmp = require;
    self = this;
    if (!require) {
      tmp = self;
    }
    iter = self.tail;
    diff = self.length - 1;
    if (null !== iter) {
      do {
        tmp3 = global;
        tmp4 = tmp;
        tmp5 = diff;
        tmp6 = self;
        callResult = global.call(tmp, iter.value, diff, self);
        iter = iter.prev;
        diff = diff - 1;
      } while (null !== iter);
    }
    return;
  }
  get(arg0) {
    head = this.head;
    num = 0;
    iter = head;
    if (null !== head) {
      num2 = 0;
      iter2 = head;
      num = 0;
      iter = head;
      if (0 < global) {
        next = iter2.next;
        sum = num2 + 1;
        num = sum;
        iter = next;
        while (null !== next) {
          num2 = sum;
          iter2 = next;
          iter = next;
          num = sum;
          if (sum >= global) {
            break;
          }
        }
      }
    }
    if (num === global) {
      if (null !== iter) {
        return iter.value;
      }
    }
    return;
  }
  getReverse(arg0) {
    tail = this.tail;
    num = 0;
    iter = tail;
    if (null !== tail) {
      num2 = 0;
      tmp = tail;
      num = 0;
      iter = tail;
      if (0 < global) {
        prev = tmp.prev;
        sum = num2 + 1;
        num = sum;
        iter = prev;
        while (null !== prev) {
          num2 = sum;
          tmp = prev;
          iter = prev;
          num = sum;
          if (sum >= global) {
            break;
          }
        }
      }
    }
    if (num === global) {
      if (null !== iter) {
        return iter.value;
      }
    }
    return;
  }
  map(arg0, arg1) {
    tmp = require;
    self = this;
    if (!require) {
      tmp = self;
    }
    arr = new Yallist();
    iter = self.head;
    if (null !== iter) {
      do {
        arr = arr.push(global.call(tmp, iter.value, self));
        iter = iter.next;
      } while (null !== iter);
    }
    return arr;
  }
  mapReverse(arg0, arg1) {
    tmp = require;
    self = this;
    if (!require) {
      tmp = self;
    }
    arr = new Yallist();
    iter = self.tail;
    if (null !== iter) {
      do {
        arr = arr.push(global.call(tmp, iter.value, self));
        iter = iter.prev;
      } while (null !== iter);
    }
    return arr;
  }
  reduce(arg0, arg1) {
    value = require;
    self = this;
    iter = this.head;
    if (arguments.length <= 1) {
      if (self.head) {
        iter = self.head.next;
        value = self.head.value;
      } else {
        tmp = globalThis;
        _TypeError = TypeError;
        prototype = TypeError.prototype;
        tmp2 = new.target;
        str = "Reduce of empty list with no initial value";
        tmp3 = new.target;
        typeError = new TypeError("Reduce of empty list with no initial value");
        tmp5 = typeError;
        throw typeError;
      }
    }
    tmp6 = value;
    num = 0;
    tmp7 = value;
    if (null !== iter) {
      do {
        tmp6 = global(tmp6, iter.value, num);
        iter = iter.next;
        num = num + 1;
        tmp7 = tmp6;
      } while (null !== iter);
    }
    return tmp7;
  }
  reduceReverse(arg0, arg1) {
    value = require;
    self = this;
    iter = this.tail;
    if (arguments.length <= 1) {
      if (self.tail) {
        iter = self.tail.prev;
        value = self.tail.value;
      } else {
        tmp = globalThis;
        _TypeError = TypeError;
        prototype = TypeError.prototype;
        tmp2 = new.target;
        str = "Reduce of empty list with no initial value";
        tmp3 = new.target;
        typeError = new TypeError("Reduce of empty list with no initial value");
        tmp5 = typeError;
        throw typeError;
      }
    }
    diff = self.length - 1;
    tmp7 = value;
    tmp8 = value;
    if (null !== iter) {
      do {
        tmp7 = global(tmp7, iter.value, diff);
        iter = iter.prev;
        diff = diff - 1;
        tmp8 = tmp7;
      } while (null !== iter);
    }
    return tmp8;
  }
  toArray() {
    array = new Array(this.length);
    iter = this.head;
    num = 0;
    if (null !== iter) {
      do {
        array[num] = iter.value;
        iter = iter.next;
        num = num + 1;
      } while (null !== iter);
    }
    return array;
  }
  toArrayReverse() {
    array = new Array(this.length);
    iter = this.tail;
    num = 0;
    if (null !== iter) {
      do {
        array[num] = iter.value;
        iter = iter.prev;
        num = num + 1;
      } while (null !== iter);
    }
    return array;
  }
  slice(arg0, arg1) {
    num = global;
    length = require;
    self = this;
    if (!require) {
      length = self.length;
    }
    length2 = length;
    if (length < 0) {
      length2 = length + self.length;
    }
    if (!num) {
      num = 0;
    }
    num2 = num;
    if (num < 0) {
      num2 = num + self.length;
    }
    arr = new Yallist();
    if (length2 >= num2) {
      if (length2 >= 0) {
        if (num2 < 0) {
          num2 = 0;
        }
        if (length2 > self.length) {
          length2 = self.length;
        }
        head = self.head;
        tmp = null;
        num3 = 0;
        iter = head;
        if (null !== head) {
          num4 = 0;
          iter2 = head;
          num3 = 0;
          iter = head;
          if (0 < num2) {
            next = iter2.next;
            sum = num4 + 1;
            num3 = sum;
            iter = next;
            while (null !== next) {
              num4 = sum;
              iter2 = next;
              num3 = sum;
              iter = next;
              if (sum >= num2) {
                break;
              }
            }
          }
        }
        if (null !== iter) {
          if (num3 < length2) {
            arr = arr.push(iter.value);
            num3 = num3 + 1;
            iter = iter.next;
            while (null !== iter) {
              if (num3 >= length2) {
                break;
              }
            }
          }
        }
        return arr;
      }
    }
    return arr;
  }
  sliceReverse(arg0, arg1) {
    num = global;
    length = require;
    self = this;
    if (!require) {
      length = self.length;
    }
    length2 = length;
    if (length < 0) {
      length2 = length + self.length;
    }
    if (!num) {
      num = 0;
    }
    num2 = num;
    if (num < 0) {
      num2 = num + self.length;
    }
    arr = new Yallist();
    if (length2 >= num2) {
      if (length2 >= 0) {
        if (num2 < 0) {
          num2 = 0;
        }
        if (length2 > self.length) {
          length2 = self.length;
        }
        ({ length: length3, tail } = self);
        tmp = null;
        diff1 = length3;
        iter = tail;
        if (null !== tail) {
          tmp3 = length3;
          tmp4 = tail;
          iter = tail;
          diff1 = length3;
          if (length3 > length2) {
            prev = tmp4.prev;
            diff = tmp3 - 1;
            diff1 = diff;
            iter = prev;
            while (null !== prev) {
              tmp3 = diff;
              tmp4 = prev;
              diff1 = diff;
              iter = prev;
              if (diff <= length2) {
                break;
              }
            }
          }
        }
        if (null !== iter) {
          if (diff1 > num2) {
            arr = arr.push(iter.value);
            diff1 = diff1 - 1;
            iter = iter.prev;
            while (null !== iter) {
              if (diff1 <= num2) {
                break;
              }
            }
          }
        }
        return arr;
      }
    }
    return arr;
  }
  reverse() {
    self = this;
    head = this.head;
    iter = head;
    if (null !== head) {
      do {
        iter.prev = iter.next;
        iter.next = iter.prev;
        iter = iter.prev;
      } while (null !== iter);
    }
    self.head = this.tail;
    self.tail = head;
    return self;
  }
}
function push(tail) {
  tail.tail = new Node(arg1, tail.tail, null, tail);
  if (!tail.head) {
    tail.head = tail.tail;
  }
  tail.length = tail.length + 1;
}
function unshift(head) {
  head.head = new Node(arg1, null, head.head, head);
  if (!head.tail) {
    head.tail = head.head;
  }
  head.length = head.length + 1;
}
class Node {
  constructor(arg0, arg1, arg2, arg3) {
    self = this;
    if (this instanceof Node) {
      self.list = importAll;
      self.value = global;
      if (require) {
        require.next = self;
        self.prev = require;
      } else {
        tmp10 = null;
        self.prev = null;
      }
      if (importDefault) {
        importDefault.prev = self;
        self.next = importDefault;
      } else {
        tmp11 = null;
        self.next = null;
      }
      return;
    } else {
      tmp = Node;
      prototype = Node.prototype;
      tmp2 = new.target;
      tmp3 = new.target;
      tmp4 = global;
      tmp5 = require;
      tmp6 = importDefault;
      tmp7 = importAll;
      tmp8 = new Node(global, require, importDefault, importAll);
      tmp9 = tmp8;
      return tmp8;
    }
  }
}
Yallist.Node = Node;
Yallist.create = Yallist;

export default Yallist;
