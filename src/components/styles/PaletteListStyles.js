import { makeStyles } from '@material-ui/core/styles';
import sizes from './sizes';
import bg from './bg.svg';

export default makeStyles({
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#4192cc',
    backgroundImage: `url(${bg})`,
    /* background by SVGBackgrounds.com */
    backgroundSize: '2000px ',
    overflowX: 'hidden'
  },
  container: {
    width: '50%',
    paddingBottom: '2rem',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    [sizes.down('xl')]: {
      width: '80%'
    },
    [sizes.down('xs')]: {
      width: '75%'
    }
  },
  nav: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: 'rgba(255, 255, 255, 0.8)',
    '& a': {
      color: 'rgba(255, 255, 255, 0.8)'
    }
  },
  palettes: {
    width: '100%',
    boxSizing: 'border-box',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '2.5rem',
    [sizes.down('md')]: {
      gridTemplateColumns: 'repeat(2, 50%)'
    },
    [sizes.down('xs')]: {
      gridTemplateColumns: 'repeat(1, 100%)',
      gridGap: '1rem'
    }
  }
});
