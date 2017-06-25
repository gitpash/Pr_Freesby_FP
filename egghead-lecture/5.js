// Imperative VS Functional //
//3
//2
//1
//!
//////////  Fight!   ////////

const Right = x => ({
  chain: f => f(x),
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`
});

const Left = x => ({
  chain: f => Left(x),
  map: f => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`
});

// define Fn that check for null case
const fromNullable = x => (x != null ? Right(x) : Left(null));

const current_user = null;
const showLogin = () => "fdf";
const renderPage = () => "_blanc";

// const openSite = () => {
//   if (current_user) {
//     return renderPage(current_user);
//   } else {
//     return showLogin();
//   }
// };

const openSite = () => fromNullable(current_user).fold(showLogin, renderPage);

//////////////////////////////////////?!!!!!!!!!!!!!

// const getPrefs = user => {
//   if (user.premium) {
//     return loadPrefs(user.preferences);
//   } else {
//     return defaultPrefs;
//   }
// };

const getPrefs = user =>
  (user.premium ? Right(user) : Left("not premium"))
    .map(u => u.preferences)
    .fold(() => defaultPrefs, prefs => loadPrefs(prefs));

console.log(openSite());

/////////////////////////////////////////////////////////

const vasya = {
  adress: {
    street: {
      names: "lenina 12"
    }
  }
};
// const streetName = user => {
//   const adress = user.adress;
//   if (adress) {
//     const street = adress.street;

//     if (street && street.name) {
//       return street.name;
//     }
//   }
//   return "no street";
// };

const streetName = user =>
  fromNullable(user.adress)
    .chain(adr => fromNullable(adr.street))
    .chain(s => fromNullable(s.name))
    .fold(() => "no street", n => n);

console.log(streetName(vasya))

//////////////////////////////////////////////////////////

const concatUniq = (x, ys) => {
  const found = ys.filter(y => y === x)[0]
  return found ? ys : ys.concat(x)
}

const concatUniq = (x, ys) => 
  fromNullable(ys.filter(y => y === x)[0])
  .fold(() => ys.concat(x), y => ys )

  ///////////////////////////////////////////////////////////////

  const wrapExamples = example => {
    if(example.previewPath) {
      try {
        example.previewPath = fs.readFileSync(example.previewPath)
      } catch(e) {}
    }
    return example
  }

const readFile = x => tryCatch(() => fs.readFileSync(x))

  const wrapExamples = example =>
    fromNullable(example.previewPath)
      .chain(readFile) // ??? 
      .fold(() => example,
                  ex => Object.assign({preview: p}, ex))

////////////??///////////??/////??////////??/////////??///  

                  