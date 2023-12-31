import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#355E3B',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './face.svg',
  fullDecal: './pattern.svg',
});

export default state;