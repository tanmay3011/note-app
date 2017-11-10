console.log('Starting notes.js');

console.log(module);

/*Module {
  id: '/Users/tan/Desktop/node/note-app/n-3-3-require-own-files/notes.js',
  exports: {},
  parent:
   Module {
     id: '.',
     exports: {},
     parent: null,
     filename: '/Users/tan/Desktop/node/note-app/n-3-3-require-own-files/app.js',
     loaded: false,
     children: [ [Circular] ],
     paths:
      [ '/Users/tan/Desktop/node/note-app/n-3-3-require-own-files/node_modules',
        '/Users/tan/Desktop/node/note-app/node_modules',
        '/Users/tan/Desktop/node/node_modules',
        '/Users/tan/Desktop/node_modules',
        '/Users/tan/node_modules',
        '/Users/node_modules',
        '/node_modules' ] },
  filename: '/Users/tan/Desktop/node/note-app/n-3-3-require-own-files/notes.js',
  loaded: false,
  children: [],
  paths:
   [ '/Users/tan/Desktop/node/note-app/n-3-3-require-own-files/node_modules',
     '/Users/tan/Desktop/node/note-app/node_modules',
     '/Users/tan/Desktop/node/node_modules',
     '/Users/tan/Desktop/node_modules',
     '/Users/tan/node_modules',
     '/Users/node_modules',
     '/node_modules' ] }*/

//exports is a object on module property and everything in this object is exported
module.exports.addNote = () => {
  console.log('addNote');
  return 'New note';
};

module.exports.add = (a, b) => {
  return a + b;
};
