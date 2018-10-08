<script>
import axios from 'axios'

export default {
  name: 'get-json',
  render() {
    return this.$scopedSlots.default({
      response: this.response
    })
  },
  props: ['endpoint'],
  created() {
    axios.get(this.endpoint)
      .then(response => {
        this.response = response.data
      })
      .catch(error => {
        console.log(error)
      });
  },
  data() {
    return {
      response: []
    }
  }
}
</script>
