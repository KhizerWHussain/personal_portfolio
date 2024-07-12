// navbar framerMotion
export const topVariant = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: 45,
    backgroundColor: 'rgb(255, 255, 255)',
  },
};

export const centerVariant = {
  closed: {
    opacity: 1,
  },
  opened: {
    opacity: 0,
  },
};

export const bottomVariant = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: -45,
    backgroundColor: 'rgb(255, 255, 255)',
  },
};

// navbar list variants
export const listVariant = {
  closed: {
    x: '100vw',
  },
  opened: {
    x: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

// list item variants
export const listItemVariant = {
  closed: {
    opacity: 0,
    x: -10,
  },
  opened: {
    x: 0,
    opacity: 1,
  },
};
