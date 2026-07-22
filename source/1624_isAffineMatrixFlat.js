// Module ID: 1624
// Function ID: 18080
// Name: isAffineMatrixFlat
// Dependencies: []

// Module 1624 (isAffineMatrixFlat)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = { code: "function isAffineMatrixFlat_Pnpm_matrixUtilsTsx1(x){return Array.isArray(x)&&x.length===16&&x.every(function(element){return typeof element==='number'&&!isNaN(element);});}" };
const tmp2 = () => {
  function isAffineMatrixFlat(arr) {
    let isArray = Array.isArray(arr);
    if (isArray) {
      isArray = 16 === arr.length;
    }
    if (isArray) {
      isArray = arr.every((arg0) => {
        let tmp = "number" === typeof arg0;
        if (tmp) {
          const _isNaN = isNaN;
          tmp = !isNaN(arg0);
        }
        return tmp;
      });
    }
    return isArray;
  }
  isAffineMatrixFlat.__closure = {};
  isAffineMatrixFlat.__workletHash = 7766400476414;
  isAffineMatrixFlat.__initData = closure_3;
  return isAffineMatrixFlat;
}();
let closure_5 = { code: "function isAffineMatrix_Pnpm_matrixUtilsTsx2(x){return Array.isArray(x)&&x.length===4&&x.every(function(row){return Array.isArray(row)&&row.length===4&&row.every(function(element){return typeof element==='number'&&!isNaN(element);});});}" };
const tmp3 = () => {
  function isAffineMatrix(arr) {
    let isArray = Array.isArray(arr);
    if (isArray) {
      isArray = 4 === arr.length;
    }
    if (isArray) {
      isArray = arr.every((arr) => {
        let isArray = Array.isArray(arr);
        if (isArray) {
          isArray = 4 === arr.length;
        }
        if (isArray) {
          isArray = arr.every((arg0) => {
            let tmp = "number" === typeof arg0;
            if (tmp) {
              const _isNaN = isNaN;
              tmp = !isNaN(arg0);
            }
            return tmp;
          });
        }
        return isArray;
      });
    }
    return isArray;
  }
  isAffineMatrix.__closure = {};
  isAffineMatrix.__workletHash = 3452211777657;
  isAffineMatrix.__initData = closure_5;
  return isAffineMatrix;
}();
let closure_7 = { code: "function flatten_Pnpm_matrixUtilsTsx3(matrix){return matrix.flat();}" };
const tmp4 = () => {
  function flatten(arr) {
    return arr.flat();
  }
  flatten.__closure = {};
  flatten.__workletHash = 9900628528512;
  flatten.__initData = closure_7;
  return flatten;
}();
let closure_9 = { code: "function unflatten_Pnpm_matrixUtilsTsx4(m){return[[m[0],m[1],m[2],m[3]],[m[4],m[5],m[6],m[7]],[m[8],m[9],m[10],m[11]],[m[12],m[13],m[14],m[15]]];}" };
const tmp5 = () => {
  function unflatten(arg0) {
    const items = [arg0[0], arg0[1], arg0[2], arg0[3]];
    const items1 = [items, , , ];
    const items2 = [arg0[4], arg0[5], arg0[6], arg0[7]];
    items1[1] = items2;
    const items3 = [arg0[8], arg0[9], arg0[10], arg0[11]];
    items1[2] = items3;
    const items4 = [arg0[12], arg0[13], arg0[14], arg0[15]];
    items1[3] = items4;
    return items1;
  }
  unflatten.__closure = {};
  unflatten.__workletHash = 17503333305803;
  unflatten.__initData = closure_9;
  return unflatten;
}();
let closure_11 = { code: "function maybeFlattenMatrix_Pnpm_matrixUtilsTsx5(matrix){const{isAffineMatrix,flatten}=this.__closure;return isAffineMatrix(matrix)?flatten(matrix):matrix;}" };
let closure_12 = () => {
  function maybeFlattenMatrix(arg0) {
    let tmp = arg0;
    if (callback(arg0)) {
      tmp = callback2(arg0);
    }
    return tmp;
  }
  maybeFlattenMatrix.__closure = { isAffineMatrix: tmp3, flatten: tmp4 };
  maybeFlattenMatrix.__workletHash = 13544286880330;
  maybeFlattenMatrix.__initData = closure_11;
  return maybeFlattenMatrix;
}();
let closure_13 = { code: "function multiplyMatrices_Pnpm_matrixUtilsTsx6(a,b){return[[a[0][0]*b[0][0]+a[0][1]*b[1][0]+a[0][2]*b[2][0]+a[0][3]*b[3][0],a[0][0]*b[0][1]+a[0][1]*b[1][1]+a[0][2]*b[2][1]+a[0][3]*b[3][1],a[0][0]*b[0][2]+a[0][1]*b[1][2]+a[0][2]*b[2][2]+a[0][3]*b[3][2],a[0][0]*b[0][3]+a[0][1]*b[1][3]+a[0][2]*b[2][3]+a[0][3]*b[3][3]],[a[1][0]*b[0][0]+a[1][1]*b[1][0]+a[1][2]*b[2][0]+a[1][3]*b[3][0],a[1][0]*b[0][1]+a[1][1]*b[1][1]+a[1][2]*b[2][1]+a[1][3]*b[3][1],a[1][0]*b[0][2]+a[1][1]*b[1][2]+a[1][2]*b[2][2]+a[1][3]*b[3][2],a[1][0]*b[0][3]+a[1][1]*b[1][3]+a[1][2]*b[2][3]+a[1][3]*b[3][3]],[a[2][0]*b[0][0]+a[2][1]*b[1][0]+a[2][2]*b[2][0]+a[2][3]*b[3][0],a[2][0]*b[0][1]+a[2][1]*b[1][1]+a[2][2]*b[2][1]+a[2][3]*b[3][1],a[2][0]*b[0][2]+a[2][1]*b[1][2]+a[2][2]*b[2][2]+a[2][3]*b[3][2],a[2][0]*b[0][3]+a[2][1]*b[1][3]+a[2][2]*b[2][3]+a[2][3]*b[3][3]],[a[3][0]*b[0][0]+a[3][1]*b[1][0]+a[3][2]*b[2][0]+a[3][3]*b[3][0],a[3][0]*b[0][1]+a[3][1]*b[1][1]+a[3][2]*b[2][1]+a[3][3]*b[3][1],a[3][0]*b[0][2]+a[3][1]*b[1][2]+a[3][2]*b[2][2]+a[3][3]*b[3][2],a[3][0]*b[0][3]+a[3][1]*b[1][3]+a[3][2]*b[2][3]+a[3][3]*b[3][3]]];}" };
let closure_14 = { code: "function subtractMatrices_Pnpm_matrixUtilsTsx7(maybeFlatA,maybeFlatB){const{isAffineMatrixFlat,maybeFlattenMatrix,unflatten}=this.__closure;const isFlatOnStart=isAffineMatrixFlat(maybeFlatA);const a=maybeFlattenMatrix(maybeFlatA);const b=maybeFlattenMatrix(maybeFlatB);const c=a.map(function(_,i){return a[i]-b[i];});return isFlatOnStart?c:unflatten(c);}" };
let closure_15 = { code: "function addMatrices_Pnpm_matrixUtilsTsx8(maybeFlatA,maybeFlatB){const{isAffineMatrixFlat,maybeFlattenMatrix,unflatten}=this.__closure;const isFlatOnStart=isAffineMatrixFlat(maybeFlatA);const a=maybeFlattenMatrix(maybeFlatA);const b=maybeFlattenMatrix(maybeFlatB);const c=a.map(function(_,i){return a[i]+b[i];});return isFlatOnStart?c:unflatten(c);}" };
const tmp6 = () => {
  function multiplyMatrices(arg0, arg1) {
    const items = [arg0[0][0] * arg1[0][0] + arg0[0][1] * arg1[1][0] + arg0[0][2] * arg1[2][0] + arg0[0][3] * arg1[3][0], arg0[0][0] * arg1[0][1] + arg0[0][1] * arg1[1][1] + arg0[0][2] * arg1[2][1] + arg0[0][3] * arg1[3][1], arg0[0][0] * arg1[0][2] + arg0[0][1] * arg1[1][2] + arg0[0][2] * arg1[2][2] + arg0[0][3] * arg1[3][2], arg0[0][0] * arg1[0][3] + arg0[0][1] * arg1[1][3] + arg0[0][2] * arg1[2][3] + arg0[0][3] * arg1[3][3]];
    const items1 = [items, , , ];
    const items2 = [arg0[1][0] * arg1[0][0] + arg0[1][1] * arg1[1][0] + arg0[1][2] * arg1[2][0] + arg0[1][3] * arg1[3][0], arg0[1][0] * arg1[0][1] + arg0[1][1] * arg1[1][1] + arg0[1][2] * arg1[2][1] + arg0[1][3] * arg1[3][1], arg0[1][0] * arg1[0][2] + arg0[1][1] * arg1[1][2] + arg0[1][2] * arg1[2][2] + arg0[1][3] * arg1[3][2], arg0[1][0] * arg1[0][3] + arg0[1][1] * arg1[1][3] + arg0[1][2] * arg1[2][3] + arg0[1][3] * arg1[3][3]];
    items1[1] = items2;
    const items3 = [arg0[2][0] * arg1[0][0] + arg0[2][1] * arg1[1][0] + arg0[2][2] * arg1[2][0] + arg0[2][3] * arg1[3][0], arg0[2][0] * arg1[0][1] + arg0[2][1] * arg1[1][1] + arg0[2][2] * arg1[2][1] + arg0[2][3] * arg1[3][1], arg0[2][0] * arg1[0][2] + arg0[2][1] * arg1[1][2] + arg0[2][2] * arg1[2][2] + arg0[2][3] * arg1[3][2], arg0[2][0] * arg1[0][3] + arg0[2][1] * arg1[1][3] + arg0[2][2] * arg1[2][3] + arg0[2][3] * arg1[3][3]];
    items1[2] = items3;
    const items4 = [arg0[3][0] * arg1[0][0] + arg0[3][1] * arg1[1][0] + arg0[3][2] * arg1[2][0] + arg0[3][3] * arg1[3][0], arg0[3][0] * arg1[0][1] + arg0[3][1] * arg1[1][1] + arg0[3][2] * arg1[2][1] + arg0[3][3] * arg1[3][1], arg0[3][0] * arg1[0][2] + arg0[3][1] * arg1[1][2] + arg0[3][2] * arg1[2][2] + arg0[3][3] * arg1[3][2], arg0[3][0] * arg1[0][3] + arg0[3][1] * arg1[1][3] + arg0[3][2] * arg1[2][3] + arg0[3][3] * arg1[3][3]];
    items1[3] = items4;
    return items1;
  }
  multiplyMatrices.__closure = {};
  multiplyMatrices.__workletHash = 4575994159882;
  multiplyMatrices.__initData = closure_13;
  return multiplyMatrices;
}();
let closure_16 = { code: "function scaleMatrix_Pnpm_matrixUtilsTsx9(maybeFlatA,scalar){const{isAffineMatrixFlat,maybeFlattenMatrix,unflatten}=this.__closure;const isFlatOnStart=isAffineMatrixFlat(maybeFlatA);const a=maybeFlattenMatrix(maybeFlatA);const b=a.map(function(x){return x*scalar;});return isFlatOnStart?b:unflatten(b);}" };
const tmp7 = () => {
  function subtractMatrices(arg0, arg1) {
    const arr = callback3(arg0);
    let closure_1 = callback3(arg1);
    const mapped = arr.map((arg0, arg1) => arr[arg1] - closure_1[arg1]);
    let tmp3 = mapped;
    if (!tmp) {
      tmp3 = callback2(mapped);
    }
    return tmp3;
  }
  subtractMatrices.__closure = { isAffineMatrixFlat: tmp2, maybeFlattenMatrix: closure_12, unflatten: tmp5 };
  subtractMatrices.__workletHash = 12538691088788;
  subtractMatrices.__initData = closure_14;
  return subtractMatrices;
}();
let closure_17 = { code: "function getRotationMatrix_Pnpm_matrixUtilsTsx10(angle,axis='z'){const cos=Math.cos(angle);const sin=Math.sin(angle);switch(axis){case'z':return[[cos,sin,0,0],[-sin,cos,0,0],[0,0,1,0],[0,0,0,1]];case'y':return[[cos,0,-sin,0],[0,1,0,0],[sin,0,cos,0],[0,0,0,1]];case'x':return[[1,0,0,0],[0,cos,sin,0],[0,-sin,cos,0],[0,0,0,1]];}}" };
const tmp8 = () => {
  function addMatrices(arg0, arg1) {
    const arr = callback3(arg0);
    let closure_1 = callback3(arg1);
    const mapped = arr.map((arg0, arg1) => arr[arg1] + closure_1[arg1]);
    let tmp3 = mapped;
    if (!tmp) {
      tmp3 = callback2(mapped);
    }
    return tmp3;
  }
  addMatrices.__closure = { isAffineMatrixFlat: tmp2, maybeFlattenMatrix: closure_12, unflatten: tmp5 };
  addMatrices.__workletHash = 17429737879880;
  addMatrices.__initData = closure_15;
  return addMatrices;
}();
let closure_18 = { code: "function norm3d_Pnpm_matrixUtilsTsx11(x,y,z){return Math.sqrt(x*x+y*y+z*z);}" };
const tmp9 = () => {
  function scaleMatrix(arg0, arg1) {
    const tmp = callback(arg0);
    const mapped = callback3(arg0).map((arg0) => arg0 * arg1);
    let tmp3 = mapped;
    if (!tmp) {
      tmp3 = callback2(mapped);
    }
    return tmp3;
  }
  scaleMatrix.__closure = { isAffineMatrixFlat: tmp2, maybeFlattenMatrix: closure_12, unflatten: tmp5 };
  scaleMatrix.__workletHash = 11907224908685;
  scaleMatrix.__initData = closure_16;
  return scaleMatrix;
}();
let closure_19 = () => {
  function norm3d(arg0, arg1, arg2) {
    return Math.sqrt(arg0 * arg0 + arg1 * arg1 + arg2 * arg2);
  }
  norm3d.__closure = {};
  norm3d.__workletHash = 3613705554848;
  norm3d.__initData = closure_18;
  return norm3d;
}();
let closure_20 = { code: "function transposeMatrix_Pnpm_matrixUtilsTsx12(matrix){const{flatten}=this.__closure;const m=flatten(matrix);return[[m[0],m[4],m[8],m[12]],[m[1],m[5],m[9],m[13]],[m[2],m[6],m[10],m[14]],[m[3],m[7],m[11],m[15]]];}" };
let closure_21 = () => {
  function transposeMatrix(arg0) {
    const tmp = callback(arg0);
    const items = [tmp[0], tmp[4], tmp[8], tmp[12]];
    const items1 = [items, , , ];
    const items2 = [tmp[1], tmp[5], tmp[9], tmp[13]];
    items1[1] = items2;
    const items3 = [tmp[2], tmp[6], tmp[10], tmp[14]];
    items1[2] = items3;
    const items4 = [tmp[3], tmp[7], tmp[11], tmp[15]];
    items1[3] = items4;
    return items1;
  }
  transposeMatrix.__closure = { flatten: tmp4 };
  transposeMatrix.__workletHash = 17306716053169;
  transposeMatrix.__initData = closure_20;
  return transposeMatrix;
}();
let closure_22 = { code: "function assertVectorsHaveEqualLengths_Pnpm_matrixUtilsTsx13(a,b){const{__DEV__}=this.__closure;if(__DEV__&&a.length!==b.length){throw new ReanimatedError(\"Cannot calculate inner product of two vectors of different lengths. Length of \"+a.toString()+\" is \"+a.length+\" and length of \"+b.toString()+\" is \"+b.length+\".\");}}" };
let closure_23 = () => {
  function assertVectorsHaveEqualLengths(arg0, arg1) {

  }
  assertVectorsHaveEqualLengths.__closure = { __DEV__: false };
  assertVectorsHaveEqualLengths.__workletHash = 14349158134583;
  assertVectorsHaveEqualLengths.__initData = closure_22;
  return assertVectorsHaveEqualLengths;
}();
let closure_24 = { code: "function innerProduct_Pnpm_matrixUtilsTsx14(a,b){const{assertVectorsHaveEqualLengths}=this.__closure;assertVectorsHaveEqualLengths(a,b);return a.reduce(function(acc,_,i){return acc+a[i]*b[i];},0);}" };
let closure_25 = () => {
  function innerProduct(arr) {
    callback(arr, arg1);
    return arr.reduce((arg0, arg1, arg2) => arg0 + arg0[arg2] * arg1[arg2], 0);
  }
  innerProduct.__closure = { assertVectorsHaveEqualLengths: closure_23 };
  innerProduct.__workletHash = 6022428100775;
  innerProduct.__initData = closure_24;
  return innerProduct;
}();
let closure_26 = { code: "function projection_Pnpm_matrixUtilsTsx15(u,a){const{assertVectorsHaveEqualLengths,innerProduct}=this.__closure;assertVectorsHaveEqualLengths(u,a);const s=innerProduct(u,a)/innerProduct(u,u);return u.map(function(e){return e*s;});}" };
let closure_27 = () => {
  function projection(arr) {
    callback(arr, arg1);
    let closure_0 = callback2(arr, arg1) / callback2(arr, arr);
    return arr.map((arg0) => arg0 * closure_0);
  }
  projection.__closure = { assertVectorsHaveEqualLengths: closure_23, innerProduct: closure_25 };
  projection.__workletHash = 12191208971941;
  projection.__initData = closure_26;
  return projection;
}();
let closure_28 = { code: "function subtractVectors_Pnpm_matrixUtilsTsx16(a,b){const{assertVectorsHaveEqualLengths}=this.__closure;assertVectorsHaveEqualLengths(a,b);return a.map(function(_,i){return a[i]-b[i];});}" };
let closure_29 = () => {
  function subtractVectors(arr) {
    callback(arr, arg1);
    return arr.map((arg0, arg1) => arg0[arg1] - arg1[arg1]);
  }
  subtractVectors.__closure = { assertVectorsHaveEqualLengths: closure_23 };
  subtractVectors.__workletHash = 9047017498478;
  subtractVectors.__initData = closure_28;
  return subtractVectors;
}();
let closure_30 = { code: "function scaleVector_Pnpm_matrixUtilsTsx17(u,a){return u.map(function(e){return e*a;});}" };
let closure_31 = () => {
  function scaleVector(arr) {
    return arr.map((arg0) => arg0 * arg1);
  }
  scaleVector.__closure = {};
  scaleVector.__workletHash = 11236256734309;
  scaleVector.__initData = closure_30;
  return scaleVector;
}();
let closure_32 = { code: "function gramSchmidtAlgorithm_Pnpm_matrixUtilsTsx18(matrix){const{subtractVectors,projection,scaleVector,innerProduct,transposeMatrix}=this.__closure;const[a0,a1,a2,a3]=matrix;const u0=a0;const u1=subtractVectors(a1,projection(u0,a1));const u2=subtractVectors(subtractVectors(a2,projection(u0,a2)),projection(u1,a2));const u3=subtractVectors(subtractVectors(subtractVectors(a3,projection(u0,a3)),projection(u1,a3)),projection(u2,a3));const[e0,e1,e2,e3]=[u0,u1,u2,u3].map(function(u){return scaleVector(u,1/Math.sqrt(innerProduct(u,u)));});const rotationMatrix=[[e0[0],e1[0],e2[0],e3[0]],[e0[1],e1[1],e2[1],e3[1]],[e0[2],e1[2],e2[2],e3[2]],[e0[3],e1[3],e2[3],e3[3]]];const skewMatrix=[[innerProduct(e0,a0),innerProduct(e0,a1),innerProduct(e0,a2),innerProduct(e0,a3)],[0,innerProduct(e1,a1),innerProduct(e1,a2),innerProduct(e1,a3)],[0,0,innerProduct(e2,a2),innerProduct(e2,a3)],[0,0,0,innerProduct(e3,a3)]];return{rotationMatrix:transposeMatrix(rotationMatrix),skewMatrix:transposeMatrix(skewMatrix)};}" };
let closure_33 = () => {
  function gramSchmidtAlgorithm(arg0) {
    let tmp12;
    let tmp13;
    let tmp14;
    let tmp15;
    const tmp = callback(arg0, 4);
    const first = tmp[0];
    const tmp6 = callback5(tmp[1], callback4(first, tmp[1]));
    const tmp8 = callback5(callback5(tmp[2], callback4(first, tmp[2])), callback4(tmp6, tmp[2]));
    const items = [first, tmp6, tmp8, ];
    const tmp7 = callback5(tmp[2], callback4(first, tmp[2]));
    const tmp9 = callback5(tmp[3], callback4(first, tmp[3]));
    items[3] = callback5(callback5(callback5(tmp[3], callback4(first, tmp[3])), callback4(tmp6, tmp[3])), callback4(tmp8, tmp[3]));
    const tmp10 = callback5(callback5(tmp[3], callback4(first, tmp[3])), callback4(tmp6, tmp[3]));
    [tmp12, tmp13, tmp14, tmp15] = callback(items.map((arg0) => callback2(arg0, 1 / Math.sqrt(callback(arg0, arg0)))), 4);
    const items1 = [tmp12[0], tmp13[0], tmp14[0], tmp15[0]];
    const items2 = [items1, , , ];
    const items3 = [tmp12[1], tmp13[1], tmp14[1], tmp15[1]];
    items2[1] = items3;
    const items4 = [tmp12[2], tmp13[2], tmp14[2], tmp15[2]];
    items2[2] = items4;
    const items5 = [tmp12[3], tmp13[3], tmp14[3], tmp15[3]];
    items2[3] = items5;
    const items6 = [callback3(tmp12, first), callback3(tmp12, tmp[1]), callback3(tmp12, tmp[2]), callback3(tmp12, tmp[3])];
    const items7 = [items6, , , ];
    const items8 = [0.229, callback3(tmp13, tmp[1]), callback3(tmp13, tmp[2]), callback3(tmp13, tmp[3])];
    items7[1] = items8;
    const items9 = ["placeholder", "aria-label", callback3(tmp14, tmp[2]), callback3(tmp14, tmp[3])];
    items7[2] = items9;
    const items10 = [, , , callback3(tmp15, tmp[3])];
    items7[3] = items10;
    const tmp11 = callback(items.map((arg0) => callback2(arg0, 1 / Math.sqrt(callback(arg0, arg0)))), 4);
    return { rotationMatrix: callback2(items2), skewMatrix: callback2(items7) };
  }
  gramSchmidtAlgorithm.__closure = { subtractVectors: closure_29, projection: closure_27, scaleVector: closure_31, innerProduct: closure_25, transposeMatrix: closure_21 };
  gramSchmidtAlgorithm.__workletHash = 1839555089531;
  gramSchmidtAlgorithm.__initData = closure_32;
  return gramSchmidtAlgorithm;
}();
let closure_34 = { code: "function decomposeMatrix_Pnpm_matrixUtilsTsx19(unknownTypeMatrix){const{maybeFlattenMatrix,norm3d,gramSchmidtAlgorithm}=this.__closure;const matrix=maybeFlattenMatrix(unknownTypeMatrix);if(matrix[15]===0){throw new ReanimatedError('Invalid transform matrix.');}matrix.forEach(function(_,i){return matrix[i]/=matrix[15];});const translationMatrix=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[matrix[12],matrix[13],matrix[14],1]];const sx=matrix[15]*norm3d(matrix[0],matrix[4],matrix[8]);const sy=matrix[15]*norm3d(matrix[1],matrix[5],matrix[9]);const sz=matrix[15]*norm3d(matrix[2],matrix[6],matrix[10]);const scaleMatrix=[[sx,0,0,0],[0,sy,0,0],[0,0,sz,0],[0,0,0,1]];const rotationAndSkewMatrix=[[matrix[0]/sx,matrix[1]/sx,matrix[2]/sx,0],[matrix[4]/sy,matrix[5]/sy,matrix[6]/sy,0],[matrix[8]/sz,matrix[9]/sz,matrix[10]/sz,0],[0,0,0,1]];const{rotationMatrix:rotationMatrix,skewMatrix:skewMatrix}=gramSchmidtAlgorithm(rotationAndSkewMatrix);return{translationMatrix:translationMatrix,scaleMatrix:scaleMatrix,rotationMatrix:rotationMatrix,skewMatrix:skewMatrix};}" };
const tmp11 = () => {
  function decomposeMatrix(arg0) {
    const arr = callback(arg0);
    if (0 === arr[15]) {
      const ReanimatedError = arr(closure_1[1]).ReanimatedError;
      const prototype = ReanimatedError.prototype;
      const reanimatedError = new ReanimatedError("Invalid transform matrix.");
      throw reanimatedError;
    } else {
      const item = arr.forEach((arg0, arg1) => {
        const result = arr[arg1] / arr[15];
        arr[arg1] = result;
        return result;
      });
      const items = [[], [], [0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003863870517923602, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001880270630297, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000624715561043573, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000793117146832445], ];
      const items1 = [arr[12], arr[13], arr[14], 1];
      items[3] = items1;
      const result = arr[15] * callback2(arr[0], arr[4], arr[8]);
      const result1 = arr[15] * callback2(arr[1], arr[5], arr[9]);
      const result2 = arr[15] * callback2(arr[2], arr[6], arr[10]);
      const items2 = [result, 0, 0, 0];
      const items3 = [items2, , , ];
      const items4 = [0.229, result1, 0, 0];
      items3[1] = items4;
      const items5 = ["placeholder", "aria-label", result2, 0];
      items3[2] = items5;
      items3[3] = [];
      const items6 = [arr[0] / result, arr[1] / result, arr[2] / result, 0];
      const items7 = [items6, , , ];
      const items8 = [arr[4] / result1, arr[5] / result1, arr[6] / result1, 0];
      items7[1] = items8;
      const items9 = [arr[8] / result2, arr[9] / result2, arr[10] / result2, 0];
      items7[2] = items9;
      items7[3] = [];
      const obj = { translationMatrix: items, scaleMatrix: items3 };
      ({ rotationMatrix: obj.rotationMatrix, skewMatrix: obj.skewMatrix } = callback3(items7));
      return obj;
    }
  }
  decomposeMatrix.__closure = { maybeFlattenMatrix: closure_12, norm3d: closure_19, gramSchmidtAlgorithm: closure_33 };
  decomposeMatrix.__workletHash = 244684068165;
  decomposeMatrix.__initData = closure_34;
  return decomposeMatrix;
}();
let closure_36 = { code: "function decomposeMatrixIntoMatricesAndAngles_Pnpm_matrixUtilsTsx20(matrix){const{decomposeMatrix}=this.__closure;const{scaleMatrix:scaleMatrix,rotationMatrix:rotationMatrix,translationMatrix:translationMatrix,skewMatrix:skewMatrix}=decomposeMatrix(matrix);const sinRy=-rotationMatrix[0][2];const ry=Math.asin(sinRy);let rx;let rz;if(sinRy===1||sinRy===-1){rz=0;rx=Math.atan2(sinRy*rotationMatrix[0][1],sinRy*rotationMatrix[0][2]);}else{rz=Math.atan2(rotationMatrix[0][1],rotationMatrix[0][0]);rx=Math.atan2(rotationMatrix[1][2],rotationMatrix[2][2]);}return{scaleMatrix:scaleMatrix,rotationMatrix:rotationMatrix,translationMatrix:translationMatrix,skewMatrix:skewMatrix,rx:rx||0,ry:ry||0,rz:rz||0};}" };

export const isAffineMatrixFlat = tmp2;
export const isAffineMatrix = tmp3;
export const flatten = tmp4;
export const unflatten = tmp5;
export const multiplyMatrices = tmp6;
export const subtractMatrices = tmp7;
export const addMatrices = tmp8;
export const scaleMatrix = tmp9;
export const getRotationMatrix = () => {
  function getRotationMatrix(result, arg1) {
    let str = "z";
    if (arguments.length > 1) {
      str = "z";
      if (undefined !== arguments[1]) {
        str = arguments[1];
      }
    }
    const cosResult = Math.cos(result);
    const sinResult = Math.sin(result);
    if ("z" === str) {
      const items = [cosResult, sinResult, 0, 0];
      const items1 = [items, , , ];
      const items2 = [-sinResult, cosResult, 0, 0];
      items1[1] = items2;
      items1[2] = [0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003863870517923602, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001880270630297, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000624715561043573, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000793117146832445];
      items1[3] = [];
      return items1;
    } else if ("y" === str) {
      const items3 = [cosResult, 0, -sinResult, 0];
      const items4 = [items3, [], , ];
      const items5 = [sinResult, 0, cosResult, 0];
      items4[2] = items5;
      items4[3] = [];
      return items4;
    } else if ("x" === str) {
      const items6 = [[], , , ];
      const items7 = [0.229, cosResult, sinResult, 0];
      items6[1] = items7;
      const items8 = [0.229, -sinResult, cosResult, 0];
      items6[2] = items8;
      items6[3] = [];
      return items6;
    }
  }
  getRotationMatrix.__closure = {};
  getRotationMatrix.__workletHash = 14367317296086;
  getRotationMatrix.__initData = closure_17;
  return getRotationMatrix;
}();
export const decomposeMatrix = tmp11;
export const decomposeMatrixIntoMatricesAndAngles = () => {
  function decomposeMatrixIntoMatricesAndAngles(toValue) {
    let scaleMatrix;
    let skewMatrix;
    let translationMatrix;
    const tmp = callback(toValue);
    const rotationMatrix = tmp.rotationMatrix;
    ({ scaleMatrix, translationMatrix, skewMatrix } = tmp);
    let num = Math.asin(tmp2);
    if (1 !== -rotationMatrix[0][2]) {
      if (-1 !== tmp2) {
        const _Math = Math;
        let num3 = Math.atan2(rotationMatrix[0][1], rotationMatrix[0][0]);
        const _Math2 = Math;
        let num4 = Math.atan2(rotationMatrix[1][2], rotationMatrix[2][2]);
      }
      const obj = { scaleMatrix, rotationMatrix, translationMatrix, skewMatrix };
      if (!num4) {
        num4 = 0;
      }
      obj.rx = num4;
      if (!num) {
        num = 0;
      }
      obj.ry = num;
      if (!num3) {
        num3 = 0;
      }
      obj.rz = num3;
      return obj;
    }
    num4 = Math.atan2(tmp2 * rotationMatrix[0][1], tmp2 * rotationMatrix[0][2]);
    num3 = 0;
  }
  decomposeMatrixIntoMatricesAndAngles.__closure = { decomposeMatrix: tmp11 };
  decomposeMatrixIntoMatricesAndAngles.__workletHash = 633682731757;
  decomposeMatrixIntoMatricesAndAngles.__initData = closure_36;
  return decomposeMatrixIntoMatricesAndAngles;
}();
