import {precacheAndRoute} from 'workbox-precaching'
import {registerRoute} from 'workbox-routing';
import {CacheFirst} from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST);

console.log('HELLO worlds 1')

registerRoute(({ request }) => {
  console.log(request.destination);
  console.log(request.url);

  return request.destination === 'font';
}, new CacheFirst({
  cacheName: 'fonts'
}));
