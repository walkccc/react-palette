import chroma from 'chroma-js';
import sizes from './sizes';

export default {
  ColorBox: {
    width: '20%',
    height: props => (props.showingFullPalette ? '25%' : '50%'),
    cursor: 'pointer',
    display: 'inline-block',
    position: 'relative',
    '&:hover svg': {
      opacity: 1
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: props => (props.showingFullPalette ? '20%' : '33.3%')
    },
    [sizes.down('md')]: {
      width: '50%',
      height: props => (props.showingFullPalette ? '10%' : '20%')
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: props => (props.showingFullPalette ? '5%' : '10%')
    }
  },
  buttons: {
    left: '40%',
    right: '40%',
    top: '40%',
    bottom: '40%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    [sizes.down('xs')]: {
      left: '80%',
      right: '5%'
    }
  },
  moreButton: {
    color: props =>
      chroma(props.background).luminance() >= 0.5
        ? 'rgba(0, 0, 0, 0.5)'
        : 'white',
    fontSize: '1.2rem',
    opacity: 0,
    '&:hover': {
      transform: 'scale(1.5)',
      transition: 'all 0.2s ease-in-out'
    }
  },
  copyButton: {
    color: props =>
      chroma(props.background).luminance() >= 0.5
        ? 'rgba(0, 0, 0, 0.5)'
        : 'white',
    fontSize: '1.2rem',
    opacity: 0,
    '&:hover': {
      transform: 'scale(1.5)',
      transition: 'all 0.2s ease-in-out'
    }
  },
  boxContent: {
    width: '70%',
    left: '0',
    bottom: '0',
    padding: '10px',
    color: 'black',
    fontSize: '12px',
    letterSpacing: '1px',
    position: 'absolute',
    textTransform: 'uppercase'
  }
};
