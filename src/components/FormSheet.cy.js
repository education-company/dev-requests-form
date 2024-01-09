import FormSheet from './FormSheet.vue'

describe('<FormSheet />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(FormSheet)
  })
})