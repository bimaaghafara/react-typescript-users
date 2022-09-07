import { SxObject } from 'src/types/SxObject';

export const sx = SxObject({
  root: {
    border: '1px solid #e8e8e8'
  },
  imgContainer: {
    background: '#f5f5f5',
    padding: '0 20%'
  },
  userDetail: {
    padding: '16px',
    '& > *': {
      padding: '4px'
    },
    '& > :nth-child(1)': {
      marginBottom: '4px',
      fontWeight: '600',
      color: '#252525'
    },
    '& > :not(:nth-child(1))': {
      fontSize: '14px',
      color: '#595959'
    }
  },
  icon: {
    height: '20px',
    width: '20px',
    marginBottom: '-5px',
    marginRight: '4px'
  }
});