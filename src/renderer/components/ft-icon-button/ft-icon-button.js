import Vue from 'vue'

export default Vue.extend({
  name: 'FtIconButton',
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: 'ellipsis-v'
    },
    theme: {
      type: String,
      default: 'base'
    },
    useShadow: {
      type: Boolean,
      default: true
    },
    dropdownPosition: {
      type: String,
      default: 'center'
    },
    dropdownNames: {
      type: Array,
      default: () => { return [] }
    },
    dropdownValues: {
      type: Array,
      default: () => { return [] }
    }
  },
  data: function () {
    return {
      showDropdown: false
    }
  },
  methods: {
    toggleDropdown: function () {
      this.showDropdown = !this.showDropdown
    },

    handleIconClick: function () {
      if (this.dropdownNames.length > 0 && this.dropdownValues.length > 0) {
        this.toggleDropdown()
      } else {
        this.$emit('click')
      }
    },

    handleDropdownClick: function (index) {
      this.toggleDropdown()
      this.$emit('click', this.dropdownValues[index])
    }
  }
})
