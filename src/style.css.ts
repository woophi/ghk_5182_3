import { style } from '@vanilla-extract/css';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  backgroundColor: '#f3f4f5',
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const box = style({
  display: 'flex',
  padding: '4px 8px ',
  borderRadius: '8px',
  backgroundColor: '#EDEEF0',
  alignItems: 'center',
  gap: '4px',
});

const row = style({
  display: 'flex',
  gap: '8px',
  flexDirection: 'row',
  alignItems: 'flex-end',
});

export const appSt = {
  bottomBtn,
  container,
  box,
  row,
};
