# Task management tool

This project implements a really simple task management tool that shows a list of tasks. The user can either mark tasks as done (as long as they're not overdue) or create new tasks. 

## Considerations & Trade-offs

- Due to the lack of time the form was implemented in a really basic way. For the future it would be nice to make the form more dynamic or even use a library like [Formik](https://formik.org/) 
- Add jest tests to ensure that the component works as expected
- Check the performance and see if there are any places where things are rendered unnecessarily
- Introduce state management via Redux or Context API for example in case the application grows bigger and gets more complex
- Better responsiveness and more details in the design (hover effects, using transitions).
- I used tailwind for the UI, because I like to have control over specific styles and I wanted to build my own components instead of using pre-built components like Bootstrap offers for example.
- Implement more prop typing (like for the `Icon` component)
- (Additional Functionality) Ability to also delete a task
- (Additional Functionality) Introduce sorting/filtering of tasks (by due date/done)


## Run the code

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.