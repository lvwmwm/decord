// Module ID: 12589
// Function ID: 97482
// Name: zero
// Dependencies: [12584]

// Module 12589 (zero)
const require = arg1;
const dependencyMap = arg6;
function zero(array) {
  let diff = array.length - 1;
  if (diff >= 0) {
    do {
      array[diff] = 0;
      diff = diff - 1;
    } while (diff >= 0);
  }
}
function StaticTreeDesc(array, closure_2, extra_base, elems, max_length) {
  this.static_tree = array;
  this.extra_bits = closure_2;
  this.extra_base = extra_base;
  this.elems = elems;
  this.max_length = max_length;
  let length = array;
  if (array) {
    length = array.length;
  }
  this.has_stree = length;
}
function TreeDesc(bl_tree, closure_11) {
  this.dyn_tree = bl_tree;
  this.max_code = 0;
  this.stat_desc = closure_11;
}
function d_code(diff) {
  if (diff < 256) {
    let tmp2 = array1[diff];
  } else {
    tmp2 = array1[256 + (diff >>> 7)];
  }
  return tmp2;
}
function put_short(pending, bi_buf) {
  pending.pending = +pending.pending + 1;
  pending.pending_buf[+pending.pending] = 255 & bi_buf;
  pending.pending = +pending.pending + 1;
  pending.pending_buf[+pending.pending] = bi_buf >>> 8 & 255;
}
function send_bits(bi_valid, diff1, arg2) {
  if (bi_valid.bi_valid > 16 - arg2) {
    bi_valid.bi_buf = bi_valid.bi_buf | diff1 << bi_valid.bi_valid & 65535;
    put_short(bi_valid, bi_valid.bi_buf);
    bi_valid.bi_buf = diff1 >> 16 - bi_valid.bi_valid;
    bi_valid.bi_valid = bi_valid.bi_valid + (arg2 - 16);
  } else {
    bi_valid.bi_buf = bi_valid.bi_buf | diff1 << bi_valid.bi_valid & 65535;
    bi_valid.bi_valid = bi_valid.bi_valid + arg2;
  }
}
function send_code(state, dyn_dtree, bl_tree) {
  send_bits(state, bl_tree[2 * dyn_dtree], bl_tree[2 * dyn_dtree + 1]);
}
function bi_reverse(arg0, arg1) {
  let tmp4;
  let tmp = arg0;
  let diff = arg1;
  let num = 0;
  do {
    let tmp3 = 1 & tmp;
    tmp = tmp >>> 1;
    tmp4 = (num | tmp3) << 1;
    diff = diff - 1;
    num = tmp4;
  } while (diff > 0);
  return tmp4 >>> 1;
}
function gen_codes(array, arg1, array2) {
  array = new Array(16);
  let num = 1;
  let num2 = 0;
  do {
    num2 = num2 + array2[num - 1] << 1;
    array[num] = num2;
    num = num + 1;
  } while (num <= 15);
  for (let num3 = 0; num3 <= arg1; num3 = num3 + 1) {
    let tmp2 = array[2 * num3 + 1];
    if (0 !== tmp2) {
      let tmp4 = bi_reverse;
      let tmp5 = +array[tmp2];
      array[tmp2] = tmp5 + 1;
      let result = 2 * num3;
      array[result] = bi_reverse(tmp5, tmp2);
    }
  }
}
function init_block(dyn_ltree) {
  let num2;
  let num3;
  let num = 0;
  do {
    dyn_ltree.dyn_ltree[2 * num] = 0;
    num = num + 1;
    num2 = 0;
  } while (num < 286);
  do {
    dyn_ltree.dyn_dtree[2 * num2] = 0;
    num2 = num2 + 1;
    num3 = 0;
  } while (num2 < 30);
  do {
    dyn_ltree.bl_tree[2 * num3] = 0;
    num3 = num3 + 1;
  } while (num3 < 19);
  dyn_ltree.dyn_ltree[512] = 1;
  dyn_ltree.static_len = 0;
  dyn_ltree.opt_len = 0;
  dyn_ltree.matches = 0;
  dyn_ltree.last_lit = 0;
}
function bi_windup(bi_valid) {
  if (bi_valid.bi_valid > 8) {
    put_short(bi_valid, bi_valid.bi_buf);
  } else if (bi_valid.bi_valid > 0) {
    bi_valid.pending = +bi_valid.pending + 1;
    bi_valid.pending_buf[+bi_valid.pending] = bi_valid.bi_buf;
  }
  bi_valid.bi_buf = 0;
  bi_valid.bi_valid = 0;
}
function smaller(dyn_tree, arg1, arg2, depth) {
  const result = 2 * arg1;
  const result1 = 2 * arg2;
  let tmp3 = dyn_tree[result] < dyn_tree[result1];
  if (!tmp3) {
    tmp3 = dyn_tree[result] === dyn_tree[result1] && depth[arg1] <= depth[arg2];
    const tmp4 = dyn_tree[result] === dyn_tree[result1] && depth[arg1] <= depth[arg2];
  }
  return tmp3;
}
function pqdownheap(heap_len, dyn_tree, diff) {
  let tmp3 = diff;
  if (diff << 1 <= heap_len.heap_len) {
    let tmp6 = tmp2 < heap_len.heap_len;
    if (tmp6) {
      tmp6 = smaller(dyn_tree, heap_len.heap[tmp2 + 1], heap_len.heap[tmp2], heap_len.depth);
    }
    let sum = tmp2;
    if (tmp6) {
      sum = tmp2 + 1;
    }
    let tmp11 = diff;
    tmp3 = diff;
    if (!smaller(dyn_tree, tmp, heap_len.heap[sum], heap_len.depth)) {
      heap_len.heap[tmp11] = heap_len.heap[sum];
      tmp3 = sum;
      while (sum << 1 <= heap_len.heap_len) {
        let tmp14 = tmp12 < heap_len.heap_len;
        if (tmp14) {
          let tmp15 = smaller;
          let tmp16 = dyn_tree;
          tmp14 = smaller(dyn_tree, heap_len.heap[tmp12 + 1], heap_len.heap[tmp12], heap_len.depth);
        }
        sum = tmp12;
        if (tmp14) {
          sum = tmp12 + 1;
        }
        let tmp17 = smaller;
        let tmp18 = dyn_tree;
        let tmp19 = tmp;
        tmp11 = tmp13;
        tmp3 = tmp13;
        if (smaller(dyn_tree, tmp, heap_len.heap[sum], heap_len.depth)) {
          break;
        }
      }
    }
  }
  heap_len.heap[tmp3] = heap_len.heap[diff];
}
function compress_block(last_lit, array, array2) {
  let num = 0;
  if (0 !== last_lit.last_lit) {
    do {
      let tmp3 = last_lit.pending_buf[last_lit.d_buf + 2 * num] << 8 | last_lit.pending_buf[last_lit.d_buf + 2 * num + 1];
      let tmp4 = last_lit.pending_buf[last_lit.l_buf + num];
      num = num + 1;
      if (0 === tmp3) {
        let tmp20 = send_code;
        let tmp21 = send_code(last_lit, tmp4, array);
        let tmp15 = tmp;
        let tmp16 = tmp2;
      } else {
        let tmp23 = send_code;
        let tmp24 = array2;
        let tmp25 = array2[tmp4];
        let tmp26 = send_code(last_lit, tmp25 + 256 + 1, array);
        let tmp27 = dependencyMap;
        let tmp28 = dependencyMap[tmp25];
        if (0 !== tmp28) {
          let tmp5 = send_bits;
          let tmp6 = array3;
          let tmp7 = send_bits(last_lit, tmp4 - array3[tmp25], tmp28);
        }
        let tmp8 = send_code;
        let tmp9 = d_code;
        let diff = tmp3 - 1;
        let tmp11 = d_code(diff);
        let tmp12 = send_code(last_lit, tmp11, array2);
        let tmp13 = dependencyMap2;
        let tmp14 = dependencyMap2[tmp11];
        tmp15 = tmp11;
        tmp16 = tmp14;
        if (0 !== tmp14) {
          let tmp17 = send_bits;
          let tmp18 = array4;
          let tmp19 = send_bits(last_lit, diff - array4[tmp11], tmp14);
          tmp15 = tmp11;
          tmp16 = tmp14;
        }
      }
      tmp = tmp15;
      tmp2 = tmp16;
    } while (num < last_lit.last_lit);
  }
  send_code(last_lit, 256, array);
}
function build_tree(heap_len, bl_desc) {
  let dyn_tree2;
  let max_code;
  const dyn_tree = bl_desc.dyn_tree;
  const elems = bl_desc.stat_desc.elems;
  heap_len.heap_len = 0;
  heap_len.heap_max = 573;
  let num = -1;
  let num2 = 0;
  let num3 = -1;
  if (0 < elems) {
    do {
      if (0 !== dyn_tree[2 * num2]) {
        let sum = heap_len.heap_len + 1;
        heap_len.heap_len = sum;
        heap_len.heap[sum] = num2;
        heap_len.depth[num2] = 0;
        num = num2;
      } else {
        dyn_tree[2 * num2 + 1] = 0;
      }
      num2 = num2 + 1;
      num3 = num;
    } while (num2 < elems);
  }
  let tmp4 = num3;
  let tmp5 = num3;
  if (heap_len.heap_len < 2) {
    do {
      let sum1 = heap_len.heap_len + 1;
      heap_len.heap_len = sum1;
      let num4 = 0;
      let sum2 = tmp4;
      if (tmp4 < 2) {
        sum2 = tmp4 + 1;
        num4 = sum2;
      }
      heap_len.heap[sum1] = num4;
      dyn_tree[2 * num4] = 1;
      heap_len.depth[num4] = 0;
      heap_len.opt_len = heap_len.opt_len - 1;
      if (tmp2) {
        heap_len.static_len = heap_len.static_len - tmp[2 * num4 + 1];
      }
      tmp4 = sum2;
      tmp5 = sum2;
    } while (heap_len.heap_len < 2);
  }
  bl_desc.max_code = tmp5;
  let diff = heap_len.heap_len >> 1;
  let sum3 = elems;
  if (diff >= 1) {
    do {
      let tmp10 = pqdownheap;
      let tmp11 = pqdownheap(heap_len, dyn_tree, diff);
      diff = diff - 1;
      sum3 = elems;
    } while (diff >= 1);
  }
  do {
    let tmp12 = heap_len.heap[1];
    let tmp13 = +heap_len.heap_len;
    heap_len.heap_len = tmp13 - 1;
    heap_len.heap[1] = heap_len.heap[tmp13];
    let tmp14 = pqdownheap;
    let tmp15 = pqdownheap(heap_len, dyn_tree, 1);
    let tmp16 = heap_len.heap[1];
    let diff1 = heap_len.heap_max - 1;
    heap_len.heap_max = diff1;
    heap_len.heap[diff1] = tmp12;
    let diff2 = heap_len.heap_max - 1;
    heap_len.heap_max = diff2;
    heap_len.heap[diff2] = tmp16;
    dyn_tree[2 * sum3] = dyn_tree[2 * tmp12] + dyn_tree[2 * tmp16];
    if (heap_len.depth[tmp12] >= heap_len.depth[tmp16]) {
      let tmp19 = heap_len.depth[tmp12];
    } else {
      tmp19 = heap_len.depth[tmp16];
    }
    heap_len.depth[sum3] = tmp19 + 1;
    dyn_tree[2 * tmp16 + 1] = sum3;
    dyn_tree[2 * tmp12 + 1] = sum3;
    let tmp20 = +sum3;
    sum3 = tmp20 + 1;
    heap_len.heap[1] = tmp20;
    let tmp21 = pqdownheap;
    let tmp22 = pqdownheap(heap_len, dyn_tree, 1);
  } while (heap_len.heap_len >= 2);
  const diff3 = heap_len.heap_max - 1;
  heap_len.heap_max = diff3;
  heap_len.heap[diff3] = heap_len.heap[1];
  ({ dyn_tree: dyn_tree2, max_code } = bl_desc);
  const extra_base = bl_desc.stat_desc.extra_base;
  let max_length = bl_desc.stat_desc.max_length;
  let num5 = 0;
  do {
    heap_len.bl_count[num5] = 0;
    num5 = num5 + 1;
  } while (num5 <= 15);
  dyn_tree2[2 * heap_len.heap[heap_len.heap_max] + 1] = 0;
  let sum4 = heap_len.heap_max + 1;
  let num6 = 0;
  let num7 = 0;
  let tmp24 = sum4;
  if (sum4 < 573) {
    do {
      let tmp25 = heap_len.heap[sum4];
      let sum5 = dyn_tree2[2 * dyn_tree2[2 * tmp25 + 1] + 1] + 1;
      let sum6 = num6;
      if (sum5 > max_length) {
        sum6 = num6 + 1;
        sum5 = max_length;
      }
      dyn_tree2[2 * tmp25 + 1] = sum5;
      if (tmp25 <= max_code) {
        let bl_count = heap_len.bl_count;
        bl_count[sum5] = bl_count[sum5] + 1;
        let num8 = 0;
        if (tmp25 >= extra_base) {
          num8 = tmp49[tmp25 - extra_base];
        }
        let tmp28 = dyn_tree2[2 * tmp25];
        heap_len.opt_len = heap_len.opt_len + tmp28 * (sum5 + num8);
        let tmp29 = num8;
        let tmp30 = tmp28;
        if (tmp48) {
          heap_len.static_len = heap_len.static_len + tmp28 * (tmp47[2 * tmp25 + 1] + num8);
          let tmp31 = num8;
          let tmp32 = tmp28;
        }
      }
      sum4 = sum4 + 1;
      num6 = sum6;
      num7 = sum6;
      tmp24 = sum4;
    } while (sum4 < 573);
  }
  if (0 !== num7) {
    do {
      let diff4 = max_length - 1;
      let tmp34 = diff4;
      let tmp35 = diff4;
      if (0 === heap_len.bl_count[diff4]) {
        do {
          let diff5 = tmp34 - 1;
          tmp34 = diff5;
          tmp35 = diff5;
          tmp37 = heap_len.bl_count[diff5];
        } while (0 === tmp37);
      }
      let bl_count2 = heap_len.bl_count;
      bl_count2[tmp35] = bl_count2[tmp35] - 1;
      let bl_count3 = heap_len.bl_count;
      let sum7 = tmp35 + 1;
      bl_count3[sum7] = bl_count3[sum7] + 2;
      let bl_count4 = heap_len.bl_count;
      bl_count4[max_length] = bl_count4[max_length] - 1;
      num7 = num7 - 2;
    } while (num7 > 0);
    if (0 !== max_length) {
      do {
        let tmp39 = heap_len.bl_count[max_length];
        let tmp40 = tmp24;
        if (0 !== tmp39) {
          do {
            let diff6 = tmp40 - 1;
            let tmp42 = heap_len.heap[diff6];
            diff7 = tmp39;
            if (tmp42 <= max_code) {
              if (dyn_tree2[2 * tmp42 + 1] !== max_length) {
                heap_len.opt_len = heap_len.opt_len + (max_length - dyn_tree2[2 * tmp42 + 1]) * dyn_tree2[2 * tmp42];
                dyn_tree2[2 * tmp42 + 1] = max_length;
              }
              diff7 = tmp39 - 1;
            }
            tmp39 = diff7;
            tmp40 = diff6;
            tmp24 = diff6;
            let tmp44 = tmp42;
          } while (0 !== diff7);
        }
        max_length = max_length - 1;
      } while (0 !== max_length);
    }
  }
  gen_codes(dyn_tree, tmp5, heap_len.bl_count);
}
function scan_tree(bl_tree, dyn_dtree, max_code) {
  let tmp = dyn_dtree[1];
  let num = 7;
  let num2 = 4;
  if (0 === tmp) {
    num = 138;
    num2 = 3;
  }
  dyn_dtree[2 * (max_code + 1) + 1] = 65535;
  let num3 = -1;
  let num4 = 0;
  let num5 = 0;
  if (0 <= max_code) {
    do {
      let tmp2 = dyn_dtree[2 * (num4 + 1) + 1];
      let sum = num5 + 1;
      let tmp4 = sum < num && tmp === tmp2;
      let tmp5 = num3;
      num5 = sum;
      let tmp6 = num2;
      if (!tmp4) {
        if (sum < num2) {
          let bl_tree5 = bl_tree.bl_tree;
          let result = 2 * tmp;
          bl_tree5[result] = bl_tree5[result] + sum;
        } else if (0 !== tmp) {
          if (tmp !== num3) {
            let bl_tree3 = bl_tree.bl_tree;
            let result1 = 2 * tmp;
            bl_tree3[result1] = bl_tree3[result1] + 1;
          }
          let bl_tree4 = bl_tree.bl_tree;
          bl_tree4[32] = bl_tree4[32] + 1;
        } else if (sum <= 10) {
          let bl_tree2 = bl_tree.bl_tree;
          bl_tree2[34] = bl_tree2[34] + 1;
        } else {
          bl_tree = bl_tree.bl_tree;
          bl_tree[36] = bl_tree[36] + 1;
        }
        let num6 = 138;
        let num7 = 3;
        if (0 !== tmp2) {
          let num8 = 7;
          let num9 = 4;
          if (tmp === tmp2) {
            num8 = 6;
            num9 = 3;
          }
          num6 = num8;
          num7 = num9;
        }
        num = num6;
        tmp6 = num7;
        tmp5 = tmp;
        num5 = 0;
      }
      num4 = num4 + 1;
      num3 = tmp5;
      num2 = tmp6;
      tmp = tmp2;
    } while (num4 <= max_code);
  }
}
function send_tree(bl_tree, dyn_dtree, diff1) {
  let tmp = dyn_dtree[1];
  let num = 7;
  let num2 = 4;
  if (0 === tmp) {
    num = 138;
    num2 = 3;
  }
  let num3 = -1;
  let num4 = 0;
  let num5 = 0;
  if (0 <= diff1) {
    do {
      let tmp2 = dyn_dtree[2 * (num4 + 1) + 1];
      let sum = num5 + 1;
      if (sum >= num) {
        let diff = sum;
        if (sum < num2) {
          do {
            let tmp21 = send_code;
            let tmp22 = send_code(bl_tree, tmp, bl_tree.bl_tree);
            diff = diff - 1;
          } while (0 != diff);
        } else if (0 !== tmp) {
          diff1 = sum;
          if (tmp !== num3) {
            let tmp15 = send_code;
            let tmp16 = send_code(bl_tree, tmp, bl_tree.bl_tree);
            diff1 = sum - 1;
          }
          let tmp17 = send_code;
          let tmp18 = send_code(bl_tree, 16, bl_tree.bl_tree);
          let tmp19 = send_bits;
          let tmp20 = send_bits(bl_tree, diff1 - 3, 2);
        } else if (sum <= 10) {
          let tmp10 = send_code;
          let tmp11 = send_code(bl_tree, 17, bl_tree.bl_tree);
          let tmp12 = send_bits;
          let tmp13 = send_bits(bl_tree, sum - 3, 3);
        } else {
          let tmp6 = send_code;
          let tmp7 = send_code(bl_tree, 18, bl_tree.bl_tree);
          let tmp8 = send_bits;
          let tmp9 = send_bits(bl_tree, sum - 11, 7);
        }
        let tmp4 = tmp;
        num5 = 0;
        num = 138;
        let num6 = 3;
        if (0 !== tmp2) {
          num5 = 0;
          num = 7;
          num6 = 4;
          tmp4 = tmp;
          if (tmp === tmp2) {
            tmp4 = tmp;
            num5 = 0;
            num = 6;
            num6 = 3;
          }
        }
      } else {
        tmp4 = num3;
        num5 = sum;
        num6 = num2;
      }
      num4 = num4 + 1;
      num3 = tmp4;
      num2 = num6;
      tmp = tmp2;
    } while (num4 <= diff1);
  }
}
function _tr_stored_block(state, state, bi_buf, arg3) {
  let num = 0;
  if (arg3) {
    num = 1;
  }
  send_bits(state, num, 3);
  bi_windup(state);
  put_short(state, bi_buf);
  put_short(state, ~bi_buf);
  require(12584) /* _has */.arraySet(state.pending_buf, state.window, state, bi_buf, state.pending);
  state.pending = state.pending + bi_buf;
}
let closure_2 = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
let closure_3 = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
let closure_4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];
let closure_5 = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
let array = new Array(576);
zero(array);
array = new Array(60);
zero(array);
const array1 = new Array(512);
zero(array1);
const array2 = new Array(256);
zero(array2);
const array3 = new Array(29);
zero(array3);
const array4 = new Array(30);
zero(array4);
let c15 = false;
arg5._tr_init = function _tr_init(state) {
  let sum1;
  let sum3;
  let sum5;
  let tmp19;
  if (!c15) {
    const _Array = Array;
    let array = new Array(16);
    let num6 = 0;
    let num7 = 0;
    do {
      let tmp6 = array3;
      array3[num7] = num6;
      let tmp7 = dependencyMap;
      let sum = num6;
      let num8 = 0;
      let tmp9 = num6;
      if (0 < 1 << dependencyMap[num7]) {
        do {
          let tmp10 = array2;
          let tmp11 = +sum;
          sum = tmp11 + 1;
          array2[tmp11] = num7;
          num8 = num8 + 1;
          let tmp12 = dependencyMap;
          tmp9 = sum;
          tmp13 = 1 << dependencyMap[num7];
        } while (num8 < tmp13);
      }
      sum1 = num7 + 1;
      num6 = tmp9;
      num7 = sum1;
    } while (sum1 < 28);
    array2[tmp9 - 1] = sum1;
    let num9 = 0;
    let num10 = 0;
    do {
      let tmp16 = array4;
      array4[num9] = num10;
      let tmp17 = dependencyMap2;
      let sum2 = num10;
      let num11 = 0;
      tmp19 = num10;
      if (0 < 1 << dependencyMap2[num9]) {
        do {
          let tmp20 = array1;
          let tmp21 = +sum2;
          sum2 = tmp21 + 1;
          array1[tmp21] = num9;
          num11 = num11 + 1;
          let tmp22 = dependencyMap2;
          tmp19 = sum2;
          tmp23 = 1 << dependencyMap2[num9];
        } while (num11 < tmp23);
      }
      sum3 = num9 + 1;
      num9 = sum3;
      num10 = tmp19;
    } while (sum3 < 16);
    let tmp25 = tmp19 >> 7;
    let num19 = 0;
    if (sum3 < 30) {
      do {
        let tmp26 = array4;
        array4[sum3] = tmp25 << 7;
        let tmp27 = dependencyMap2;
        let sum4 = tmp25;
        let num20 = 0;
        if (0 < 1 << dependencyMap2[sum3] - 7) {
          do {
            let tmp29 = array1;
            let tmp30 = +sum4;
            sum4 = tmp30 + 1;
            array1[256 + tmp30] = sum3;
            num20 = num20 + 1;
            let tmp31 = dependencyMap2;
            tmp25 = sum4;
            tmp32 = 1 << dependencyMap2[sum3] - 7;
          } while (num20 < tmp32);
        }
        sum3 = sum3 + 1;
        num19 = 0;
      } while (sum3 < 30);
    }
    do {
      array[num19] = 0;
      num19 = num19 + 1;
      let num21 = 0;
    } while (num19 <= 15);
    do {
      let tmp33 = array;
      array[2 * num21 + 1] = 8;
      sum5 = num21 + 1;
      array[8] = array[8] + 1;
      num21 = sum5;
    } while (sum5 <= 143);
    let sum6 = sum5;
    let tmp36 = sum5;
    if (sum5 <= 255) {
      do {
        let tmp37 = array;
        array[2 * sum6 + 1] = 9;
        sum6 = sum6 + 1;
        array[9] = array[9] + 1;
        tmp36 = sum6;
      } while (sum6 <= 255);
    }
    let sum7 = tmp36;
    let sum8 = tmp36;
    if (tmp36 <= 279) {
      do {
        let tmp40 = array;
        array[2 * sum7 + 1] = 7;
        sum7 = sum7 + 1;
        array[7] = array[7] + 1;
        sum8 = sum7;
      } while (sum7 <= 279);
    }
    if (sum8 <= 287) {
      do {
        let tmp41 = array;
        array[2 * sum8 + 1] = 8;
        sum8 = sum8 + 1;
        array[8] = array[8] + 1;
      } while (sum8 <= 287);
    }
    gen_codes(array, 287, array);
    let num27 = 0;
    do {
      let tmp45 = array;
      array[2 * num27 + 1] = 5;
      let tmp47 = bi_reverse;
      let result = 2 * num27;
      array[result] = bi_reverse(num27, 5);
      num27 = num27 + 1;
    } while (num27 < 30);
    const prototype2 = StaticTreeDesc.prototype;
    const tmp53 = new StaticTreeDesc(array, dependencyMap, 257, 286, 15);
    let closure_11 = tmp53;
    const prototype3 = StaticTreeDesc.prototype;
    const tmp59 = new StaticTreeDesc(array, dependencyMap2, 0, 30, 15);
    let closure_12 = tmp59;
    const _Array2 = Array;
    array = new Array(0);
    const prototype5 = StaticTreeDesc.prototype;
    const tmp68 = new StaticTreeDesc(array, closure_4, 0, 19, 7);
    let closure_13 = tmp68;
    c15 = true;
  }
  state.l_desc = new TreeDesc(state.dyn_ltree, closure_11);
  const tmp70 = new TreeDesc(state.dyn_ltree, closure_11);
  state.d_desc = new TreeDesc(state.dyn_dtree, closure_12);
  const tmp71 = new TreeDesc(state.dyn_dtree, closure_12);
  state.bl_desc = new TreeDesc(state.bl_tree, closure_13);
  state.bi_buf = 0;
  state.bi_valid = 0;
  init_block(state);
};
arg5._tr_stored_block = _tr_stored_block;
arg5._tr_flush_block = function _tr_flush_block(level, state, bi_buf, arg3) {
  if (level.level > 0) {
    if (2 === level.strm.data_type) {
      let num6 = 4093624447;
      let num5 = 0;
      while (true) {
        if (!(1 & num6)) {
          num5 = num5 + 1;
          num6 = num6 >>> 1;
          if (num5 <= 31) {
            continue;
          } else {
            let num7 = 18;
            let num4 = 1;
            if (0 !== level.dyn_ltree[18]) {
              break;
            } else {
              let num8 = 20;
              num4 = 1;
              if (0 !== level.dyn_ltree[20]) {
                break;
              } else {
                let num9 = 26;
                let num10 = 32;
                let num11 = 256;
                num4 = 1;
                if (0 !== level.dyn_ltree[26]) {
                  break;
                } else {
                  num4 = 1;
                  while (0 === level.dyn_ltree[2 * num10]) {
                    num10 = num10 + 1;
                    num4 = 0;
                    if (num10 >= 256) {
                      break;
                    }
                  }
                }
              }
            }
          }
          break;
        } else {
          num4 = 0;
          if (0 !== level.dyn_ltree[2 * num5]) {
            break;
          }
        }
        tmp44.data_type = num4;
      }
    }
    build_tree(level, level.l_desc);
    build_tree(level, level.d_desc);
    scan_tree(level, level.dyn_ltree, level.l_desc.max_code);
    scan_tree(level, level.dyn_dtree, level.d_desc.max_code);
    build_tree(level, level.bl_desc);
    let num15 = 18;
    let num16 = 18;
    if (0 === level.bl_tree[2 * dependencyMap3[18] + 1]) {
      const diff = num15 - 1;
      num16 = diff;
      while (diff >= 3) {
        let tmp12 = dependencyMap3;
        num15 = diff;
        num16 = diff;
        if (0 !== level.bl_tree[2 * dependencyMap3[diff] + 1]) {
          break;
        }
      }
    }
    level.opt_len = level.opt_len + (3 * (num16 + 1) + 5 + 5 + 4);
    let sum = level.opt_len + 3 + 7 >>> 3;
    let tmp2 = tmp13;
    let num2 = num16;
    if (level.static_len + 3 + 7 >>> 3 <= sum) {
      sum = tmp13;
      tmp2 = tmp13;
      num2 = num16;
    }
  } else {
    sum = bi_buf + 5;
    tmp2 = sum;
    num2 = 0;
  }
  if (bi_buf + 4 <= sum) {
    if (-1 !== state) {
      _tr_stored_block(level, state, bi_buf, arg3);
    }
    init_block(level);
    if (arg3) {
      bi_windup(level);
    }
  }
  if (4 !== level.strategy) {
    if (tmp2 !== sum) {
      let num21 = 0;
      if (arg3) {
        num21 = 1;
      }
      send_bits(level, 4 + num21, 3);
      const sum1 = level.l_desc.max_code + 1;
      const sum2 = num2 + 1;
      const sum3 = level.d_desc.max_code + 1;
      send_bits(level, sum1 - 257, 5);
      const diff1 = sum3 - 1;
      send_bits(level, diff1, 5);
      send_bits(level, sum2 - 4, 4);
      let num27 = 0;
      if (0 < sum2) {
        do {
          let tmp23 = send_bits;
          let tmp24 = dependencyMap3;
          let tmp25 = send_bits(level, level.bl_tree[2 * dependencyMap3[num27] + 1], 3);
          num27 = num27 + 1;
        } while (num27 < sum2);
      }
      send_tree(level, level.dyn_ltree, sum1 - 1);
      send_tree(level, level.dyn_dtree, diff1);
      compress_block(level, level.dyn_ltree, level.dyn_dtree);
      const tmp45 = send_bits;
    }
  }
  let num28 = 0;
  if (arg3) {
    num28 = 1;
  }
  send_bits(level, 2 + num28, 3);
  compress_block(level, array, array);
};
arg5._tr_tally = function _tr_tally(state, arg1, arg2) {
  state.pending_buf[state.d_buf + 2 * state.last_lit] = arg1 >>> 8 & 255;
  state.pending_buf[state.d_buf + 2 * state.last_lit + 1] = 255 & arg1;
  state.pending_buf[state.l_buf + state.last_lit] = 255 & arg2;
  state.last_lit = state.last_lit + 1;
  if (0 === arg1) {
    const dyn_ltree2 = state.dyn_ltree;
    const result = 2 * arg2;
    dyn_ltree2[result] = dyn_ltree2[result] + 1;
  } else {
    state.matches = state.matches + 1;
    const dyn_ltree = state.dyn_ltree;
    const result1 = 2 * (array2[arg2] + 256 + 1);
    dyn_ltree[result1] = dyn_ltree[result1] + 1;
    const dyn_dtree = state.dyn_dtree;
    const result2 = 2 * d_code(arg1 - 1);
    dyn_dtree[result2] = dyn_dtree[result2] + 1;
  }
  return state.last_lit === state.lit_bufsize - 1;
};
arg5._tr_align = function _tr_align(state) {
  send_bits(state, 2, 3);
  send_code(state, 256, array);
  if (16 === state.bi_valid) {
    put_short(state, state.bi_buf);
    state.bi_buf = 0;
    state.bi_valid = 0;
  } else if (state.bi_valid >= 8) {
    state.pending = +state.pending + 1;
    state.pending_buf[+state.pending] = 255 & state.bi_buf;
    state.bi_buf = state.bi_buf >> 8;
    state.bi_valid = state.bi_valid - 8;
  }
};
