"use strict";var p=function(e,a){return function(){try{return a||e((a={exports:{}}).exports,a),a.exports}catch(f){throw (a=0, f)}};};var O=p(function(W,d){
var G=require('@stdlib/ndarray-base-assert-is-row-major/dist'),E=require('@stdlib/strided-base-reinterpret-complex128/dist');function H(e,a,f,m,i,w,g,R,s,x,l,o){var y,b,h,z,u,j,v,n,t,r,q;if(e<=0||a<=0)return-1;if(y=E(f,0),b=E(g,0),m*=2,i*=2,w*=2,R*=2,s*=2,G([m,i])){for(u=a,j=e,q=0;q<j;q++){for(v=w+q*m,t=s,r=0;r<u&&!(y[v]!==b[t]||y[v+1]!==b[t+1]);r++)v+=i,t+=R;if(r===u)return q}return-1}for(u=e,j=a,h=m,z=i-u*m,n=o,r=0;r<u;r++)x[n]=1,n+=l;for(v=w,t=s,q=0;q<j;q++){for(n=o,r=0;r<u;r++)(y[v]!==b[t]||y[v+1]!==b[t+1])&&(x[n]=0),v+=h,n+=l;v+=z,t+=R}for(n=o,r=0;r<u&&x[n]!==1;r++)n+=l;return r===u?-1:r}d.exports=H
});var _=p(function(X,V){
var I=require('@stdlib/blas-base-assert-is-layout/dist'),J=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),K=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),F=require('@stdlib/strided-base-stride2offset/dist'),P=require('@stdlib/math-base-special-fast-max/dist'),S=require('@stdlib/error-tools-fmtprodmsg/dist'),Q=O();function U(e,a,f,m,i,w,g,R,s){var x,l,o;if(!I(e))throw new TypeError(S('2ivFx',e));if(J(e)?o=f:o=a,i<P(1,o))throw new RangeError(S('2ivIR',o,i));return K(e)?(x=1,l=i):(x=i,l=1),Q(a,f,m,x,l,0,w,g,F(f,g),R,s,F(a,s))}V.exports=U
});var k=p(function(A,T){
var Y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=_(),Z=O();Y(C,"ndarray",Z);T.exports=C
});var $=require("path").join,M=require('@stdlib/utils-try-require/dist'),L=require('@stdlib/assert-is-error/dist'),D=k(),c,B=M($(__dirname,"./native.js"));L(B)?c=D:c=B;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
