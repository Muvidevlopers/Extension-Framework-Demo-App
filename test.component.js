export default {
  name: "TestComponent",
  /* html */
  template: `
  Hi Bhadresh
  `,
  components: {
  },
  data() {
    return {
    };
  },
  computed: {},
  mounted() {},
  methods: {
    logout: function () {
      localStorage.clear();
    },
  },
};
