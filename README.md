<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# trunc10

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Round a numeric value to the nearest power of 10 toward zero.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-trunc10
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var trunc10 = require( '@stdlib/math-base-special-trunc10' );
```

#### trunc10( x )

Rounds a `numeric` value to the nearest power of 10 toward zero.

```javascript
var v = trunc10( -4.2 );
// returns -1.0

v = trunc10( -4.5 );
// returns -1.0

v = trunc10( -4.6 );
// returns -1.0

v = trunc10( 9.99999 );
// returns 1.0

v = trunc10( 9.5 );
// returns 1.0

v = trunc10( 13.0 );
// returns 10.0

v = trunc10( -13.0 );
// returns -10.0

v = trunc10( 0.0 );
// returns 0.0

v = trunc10( -0.0 );
// returns -0.0

v = trunc10( Infinity );
// returns Infinity

v = trunc10( -Infinity );
// returns -Infinity

v = trunc10( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function may not return accurate results for subnormals due to a general loss in precision.

    ```javascript
    var v = trunc10( 1.0e-323 ); // should return 1.0e-323
    // returns 0.0
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var trunc10 = require( '@stdlib/math-base-special-trunc10' );

var x;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*100.0) - 50.0;
    v = trunc10( x );
    console.log( 'Value: %d. Rounded: %d.', x, v );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/ceil10`][@stdlib/math/base/special/ceil10]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest power of 10 toward positive infinity.</span>
-   <span class="package-name">[`@stdlib/math-base/special/floor10`][@stdlib/math/base/special/floor10]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest power of 10 toward negative infinity.</span>
-   <span class="package-name">[`@stdlib/math-base/special/round10`][@stdlib/math/base/special/round10]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest power of 10 on a linear scale.</span>
-   <span class="package-name">[`@stdlib/math-base/special/trunc`][@stdlib/math/base/special/trunc]</span><span class="delimiter">: </span><span class="description">round a double-precision floating-point number toward zero.</span>
-   <span class="package-name">[`@stdlib/math-base/special/trunc2`][@stdlib/math/base/special/trunc2]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest power of two toward zero.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-trunc10.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-trunc10

[test-image]: https://github.com/stdlib-js/math-base-special-trunc10/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-trunc10/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-trunc10/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-trunc10?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-trunc10.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-trunc10/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-trunc10/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-trunc10/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-trunc10/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-trunc10/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-trunc10/main/LICENSE

<!-- <related-links> -->

[@stdlib/math/base/special/ceil10]: https://github.com/stdlib-js/math-base-special-ceil10

[@stdlib/math/base/special/floor10]: https://github.com/stdlib-js/math-base-special-floor10

[@stdlib/math/base/special/round10]: https://github.com/stdlib-js/math-base-special-round10

[@stdlib/math/base/special/trunc]: https://github.com/stdlib-js/math-base-special-trunc

[@stdlib/math/base/special/trunc2]: https://github.com/stdlib-js/math-base-special-trunc2

<!-- </related-links> -->

</section>

<!-- /.links -->
