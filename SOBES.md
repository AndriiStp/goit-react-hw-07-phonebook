// MIDDLEWARE прокладка, функция перед редюсером, делвает что угодно, самое масштабируемое место в приложении. джунам нафиг ен надо. Сбор аналитики например

const myMiddleWare1 = store => {
  return next => {
    //відправка далі, без Некста виконання функції action не проходить і зупиняється на middleware
    return action => {
      console.log('HELLO'); // тут знаходиться тіло міддлеВара
      next(action); //щоб відправка відбулась, потрібно викликати некст
    };
  };
};

//короткий лаконічний варіант без ретурнів
const mymiddleware2 = store => next => action => {
  console.log('Hello');
  next(action);
};

export const store = configureStore({
  reducer: {
    account: accountReducer,
    local: localReducer,
  },
  middleware: getDefaultMiddleware => {
    const defaultMiddleware = getDefaultMiddleware();

    return [...defaultMiddleware, myMiddleWare1, mymiddleware2];
  },
});

const thunkMiddleware = store => next => action => {
  if (typeof action === 'function') {
    action(store.dispatch);
    return;
  }
  next(action);
};
