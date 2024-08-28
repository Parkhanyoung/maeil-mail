import { styleVariants } from '@vanilla-extract/css';
import { borderColor1 } from '@/styles/vars.css';

export const dividerStyle = styleVariants({
  default: {
    border: `0.01rem solid ${borderColor1}`,
    margin: '2rem 0',
  },
});