// Module ID: 12835
// Function ID: 12836
// Name: List
// Dependencies: []

// Module 12835 (List)
function createItem(data) {
  return { prev: null, next: null, data };
}
let cursor = null;
class List {
  constructor() {

  }
  updateCursors(arg0, prev, arg2, next) {
    let iter = this.cursor;
    if (null !== iter) {
      do {
        if (iter.prev === arg0) {
          iter.prev = prev;
        }
        if (iter.next === arg2) {
          iter.next = next;
        }
        iter = iter.cursor;
      } while (null !== iter);
    }
  }
  getSize() {
    let iter = this.head;
    let num = 0;
    let num2 = 0;
    while (iter) {
      num = num + 1;
      iter = iter.next;
      num2 = num;
    }
    return num2;
  }
  fromArray(arg0) {
    const self = this;
    this.head = null;
    let num = 0;
    let tmp = null;
    let tmp2 = null;
    if (0 < arg0.length) {
      do {
        let obj = { prev: tmp, next: null, data: arg0[num] };
        if (null !== tmp) {
          tmp.next = obj;
        } else {
          self.head = obj;
        }
        num = num + 1;
        tmp = obj;
        tmp2 = obj;
      } while (num < arg0.length);
    }
    self.tail = tmp2;
    return self;
  }
  toArray() {
    let iter = this.head;
    const items = [];
    while (iter) {
      let arr = items.push(iter.data);
      iter = iter.next;
    }
    return items;
  }
  isEmpty() {
    return null === this.head;
  }
  first() {
    return this.head && this.head.data;
  }
  last() {
    return this.tail && this.tail.data;
  }
  each(call, arg1) {
    let data;
    let obj;
    const self = this;
    let tmp = arg1;
    if (undefined === arg1) {
      tmp = self;
    }
    const head = self.head;
    if (null !== cursor) {
      cursor = tmp2.cursor;
      cursor.prev = null;
      cursor.next = head;
      cursor.cursor = self.cursor;
      obj = tmp2;
    } else {
      obj = { prev: null, next: head, cursor: self.cursor };
    }
    self.cursor = obj;
    if (null !== obj.next) {
      do {
        let next = obj.next;
        ({ next: obj.next, data } = next);
        let callResult = call.call(tmp, data, next, self);
      } while (null !== obj.next);
    }
    cursor = self.cursor;
    self.cursor = cursor.cursor;
    cursor.prev = null;
    cursor.next = null;
    cursor.cursor = cursor;
  }
  eachRight(call, arg1) {
    let data;
    let obj;
    const self = this;
    let tmp = arg1;
    if (undefined === arg1) {
      tmp = self;
    }
    const tail = self.tail;
    if (null !== cursor) {
      cursor = tmp2.cursor;
      cursor.prev = tail;
      cursor.next = null;
      cursor.cursor = self.cursor;
      obj = tmp2;
    } else {
      obj = { prev: tail, next: null, cursor: self.cursor };
    }
    self.cursor = obj;
    if (null !== obj.prev) {
      do {
        let prev = obj.prev;
        ({ prev: obj.prev, data } = prev);
        let callResult = call.call(tmp, data, prev, self);
      } while (null !== obj.prev);
    }
    cursor = self.cursor;
    self.cursor = cursor.cursor;
    cursor.prev = null;
    cursor.next = null;
    cursor.cursor = cursor;
  }
  reduce(call, arg1, arg2) {
    let data;
    let obj;
    const self = this;
    let tmp = arg2;
    if (undefined === arg2) {
      tmp = self;
    }
    const head = self.head;
    if (null !== cursor) {
      cursor = tmp2.cursor;
      cursor.prev = null;
      cursor.next = head;
      cursor.cursor = self.cursor;
      obj = tmp2;
    } else {
      obj = { prev: null, next: head, cursor: self.cursor };
    }
    let tmp3 = arg1;
    self.cursor = obj;
    let tmp4 = arg1;
    if (null !== obj.next) {
      do {
        let next = obj.next;
        ({ next: obj.next, data } = next);
        let callResult = call.call(tmp, tmp3, data, next, self);
        tmp3 = callResult;
        tmp4 = callResult;
      } while (null !== obj.next);
    }
    cursor = self.cursor;
    self.cursor = cursor.cursor;
    cursor.prev = null;
    cursor.next = null;
    cursor.cursor = cursor;
    return tmp4;
  }
  reduceRight(call, arg1, arg2) {
    let data;
    let obj;
    const self = this;
    let tmp = arg2;
    if (undefined === arg2) {
      tmp = self;
    }
    const tail = self.tail;
    if (null !== cursor) {
      cursor = tmp2.cursor;
      cursor.prev = tail;
      cursor.next = null;
      cursor.cursor = self.cursor;
      obj = tmp2;
    } else {
      obj = { prev: tail, next: null, cursor: self.cursor };
    }
    let tmp3 = arg1;
    self.cursor = obj;
    let tmp4 = arg1;
    if (null !== obj.prev) {
      do {
        let prev = obj.prev;
        ({ prev: obj.prev, data } = prev);
        let callResult = call.call(tmp, tmp3, data, prev, self);
        tmp3 = callResult;
        tmp4 = callResult;
      } while (null !== obj.prev);
    }
    cursor = self.cursor;
    self.cursor = cursor.cursor;
    cursor.prev = null;
    cursor.next = null;
    cursor.cursor = cursor;
    return tmp4;
  }
  nextUntil(next, call, arg2) {
    let data;
    let data2;
    if (null !== next) {
      let obj;
      const self = this;
      let tmp = arg2;
      if (undefined === arg2) {
        tmp = self;
      }
      if (null !== cursor) {
        cursor = tmp2.cursor;
        cursor.prev = null;
        cursor.next = next;
        cursor.cursor = self.cursor;
        obj = tmp2;
      } else {
        obj = { prev: null, next, cursor: self.cursor };
      }
      self.cursor = obj;
      if (null !== obj.next) {
        const next2 = obj.next;
        ({ next: obj.next, data: data2 } = next2);
        if (!call.call(tmp, data2, next2, self)) {
          while (null !== obj.next) {
            next = obj.next;
            ({ next: obj.next, data } = next);
            if (call.call(tmp, data, next, self)) {
              break;
            }
          }
        }
      }
      cursor = self.cursor;
      self.cursor = cursor.cursor;
      cursor.prev = null;
      cursor.next = null;
      cursor.cursor = cursor;
    }
  }
  prevUntil(prev, call, arg2) {
    let data;
    let data2;
    if (null !== prev) {
      let obj;
      const self = this;
      let tmp = arg2;
      if (undefined === arg2) {
        tmp = self;
      }
      if (null !== cursor) {
        cursor = tmp2.cursor;
        cursor.prev = prev;
        cursor.next = null;
        cursor.cursor = self.cursor;
        obj = tmp2;
      } else {
        obj = { prev, next: null, cursor: self.cursor };
      }
      self.cursor = obj;
      if (null !== obj.prev) {
        const prev2 = obj.prev;
        ({ prev: obj.prev, data: data2 } = prev2);
        if (!call.call(tmp, data2, prev2, self)) {
          while (null !== obj.prev) {
            prev = obj.prev;
            ({ prev: obj.prev, data } = prev);
            if (call.call(tmp, data, prev, self)) {
              break;
            }
          }
        }
      }
      cursor = self.cursor;
      self.cursor = cursor.cursor;
      cursor.prev = null;
      cursor.next = null;
      cursor.cursor = cursor;
    }
  }
  some(call, arg1) {
    const self = this;
    let tmp = arg1;
    let iter = this.head;
    if (undefined === arg1) {
      tmp = self;
    }
    if (null !== iter) {
      while (true) {
        let data = iter.data;
        if (call.call(tmp, data, iter, self)) {
          break;
        } else {
          iter = iter.next;
        }
      }
      return true;
    }
    return false;
  }
  map(call, arg1) {
    const self = this;
    let tmp = arg1;
    Object.create(List.prototype);
    const obj = { cursor: null, head: null, tail: null };
    let iter = this.head;
    if (undefined === arg1) {
      tmp = self;
    }
    if (null !== iter) {
      do {
        let data = iter.data;
        let appendDataResult = obj.appendData(call.call(tmp, data, iter, self));
        iter = iter.next;
      } while (null !== iter);
    }
    return obj;
  }
  filter(call, arg1) {
    const self = this;
    let tmp = arg1;
    Object.create(List.prototype);
    const obj = { cursor: null, head: null, tail: null };
    let iter = this.head;
    if (undefined === arg1) {
      tmp = self;
    }
    if (null !== iter) {
      do {
        let data = iter.data;
        if (call.call(tmp, data, iter, self)) {
          let appendDataResult = obj.appendData(iter.data);
        }
        iter = iter.next;
      } while (null !== iter);
    }
    return obj;
  }
  clear() {

  }
  copy() {
    Object.create(List.prototype);
    const obj = { cursor: null, head: null, tail: null };
    let iter = this.head;
    if (null !== iter) {
      do {
        let obj4 = { prev: null, next: null, data: iter.data };
        let insertResult = obj.insert(obj4);
        iter = iter.next;
      } while (null !== iter);
    }
    return obj;
  }
  prepend(prev) {
    const self = this;
    this.updateCursors(null, prev, this.head, prev);
    if (null !== this.head) {
      self.head.prev = prev;
      prev.next = self.head;
    } else {
      self.tail = prev;
    }
    self.head = prev;
    return self;
  }
  prependData(data) {
    const obj = { prev: null, next: null, data };
    return this.prepend(obj);
  }
  append(arg0) {
    return this.insert(arg0);
  }
  appendData(data) {
    const obj = { prev: null, next: null, data };
    return this.insert(obj);
  }
  insert(head, prev) {
    const self = this;
    if (null != prev) {
      self.updateCursors(prev.prev, head, prev, head);
      if (null === prev.prev) {
        if (self.head !== prev) {
          const _Error = Error;
          const self2 = this;
          const self3 = this;
          const error = new Error("before doesn't belong to list");
          throw error;
        } else {
          self.head = head;
          prev.prev = head;
          head.next = prev;
          self.updateCursors(null, head);
        }
      } else {
        prev.prev.next = head;
        head.prev = prev.prev;
        prev.prev = head;
        head.next = prev;
      }
    } else {
      self.updateCursors(self.tail, head, null, head);
      if (null !== self.tail) {
        self.tail.next = head;
        head.prev = self.tail;
      } else {
        self.head = head;
      }
      self.tail = head;
    }
    return self;
  }
  insertData(data, arg1) {
    const obj = { prev: null, next: null, data };
    return this.insert(obj, arg1);
  }
  remove(prev) {
    const self = this;
    this.updateCursors(prev, prev.prev, prev, prev.next);
    if (null !== prev.prev) {
      prev.prev.next = prev.next;
    } else if (self.head !== prev) {
      const _Error = Error;
      const self2 = this;
      const self3 = this;
      const error = new Error("item doesn't belong to list");
      throw error;
    } else {
      self.head = prev.next;
    }
    if (null !== prev.next) {
      prev.next.prev = prev.prev;
    } else if (self.tail !== prev) {
      const _Error2 = Error;
      const self4 = this;
      const self5 = this;
      const error1 = new Error("item doesn't belong to list");
      throw error1;
    } else {
      self.tail = prev.prev;
    }
    prev.prev = null;
    prev.next = null;
    return prev;
  }
  push(data) {
    const obj = { prev: null, next: null, data };
    this.insert(obj);
  }
  pop() {
    const self = this;
    if (null !== this.tail) {
      return self.remove(self.tail);
    }
  }
  unshift(data) {
    const obj = { prev: null, next: null, data };
    this.prepend(obj);
  }
  shift() {
    const self = this;
    if (null !== this.head) {
      return self.remove(self.head);
    }
  }
  prependList(arg0) {
    return this.insertList(arg0, this.head);
  }
  appendList(arg0) {
    return this.insertList(arg0);
  }
  insertList(head, prev) {
    const self = this;
    if (null !== head.head) {
      if (null != prev) {
        self.updateCursors(prev.prev, head.tail, prev, head.head);
        if (null !== prev.prev) {
          prev.prev.next = head.head;
          head.head.prev = prev.prev;
        } else {
          self.head = head.head;
        }
        prev.prev = head.tail;
        head.tail.next = prev;
      } else {
        self.updateCursors(self.tail, head.tail, null, head.head);
        if (null !== self.tail) {
          self.tail.next = head.head;
          head.head.prev = self.tail;
        } else {
          self.head = head.head;
        }
        self.tail = head.tail;
      }
      head.head = null;
      head.tail = null;
    }
    return self;
  }
  replace(arg0, arg1) {
    const self = this;
    if ("head" in arg1) {
      self.insertList(arg1, arg0);
    } else {
      self.insert(arg1, arg0);
    }
    self.remove(arg0);
  }
}
List.createItem = createItem;
List.prototype.createItem = createItem;
List.prototype.toJSON = List.prototype.toArray;
List.prototype.forEach = List.prototype.each;
List.prototype.forEachRight = List.prototype.eachRight;

export default List;
