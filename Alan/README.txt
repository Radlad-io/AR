These are rudimentary examples. For other examples and best practices, see 
https://ar-js-org.github.io/AR.js-Docs/
https://aframe.io/blog/arjs/
https://aframe.io/
https://threejs.org/

marker generator:
https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html

NFT generator:
https://carnaux.github.io/NFT-Marker-Creator/#/
https://github.com/Carnaux/NFT-Marker-Creator/wiki/Creating-good-markers


aframe.html - uses location-based tracking only, no markers

hiro.html - uses the marker/pattern-logoMarker.patt for tracking the image marker/pattern-logoMarker.png

cover.html - uses NFT/summer.iset, .fset, .fset3, for tracking the catalog cover images/summer.jpg


The following are scripts sourced by each of the above. These can be consolidated and/or the builds can be moved to the local server
so that external dependencies are not required:

aframe:
<script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>

hiro:
<script src="https://aframe.io/releases/0.6.0/aframe.min.js"></script> (should be able to use 1.2.0 above)
<script src="https://jeromeetienne.github.io/AR.js/aframe/build/aframe-ar.js"></script>

cover:
<script src="https://cdn.jsdelivr.net/gh/aframevr/aframe@1c2407b26c61958baa93967b5412487cd94b290b/dist/aframe-master.min.js"></script>
<script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"></script>
