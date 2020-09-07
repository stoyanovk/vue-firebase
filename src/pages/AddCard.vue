<template>
  <div class="container">
    <h1 class="my-4">Add new card</h1>
    <div class="row">
      <div class="col-4 offset-2">
        <div class="img-wrap"></div>
      </div>
      <div class="col-4">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Label</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Description</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <label for="inputGroupFile02">Image</label>
          <div class="input-group mb-3">
            <div
              class="custom-file-label"
              aria-describedby="inputGroupFileAddon02"
            >
              Choose file
            </div>
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="inputGroupFile02"
              />
            </div>
          </div>
          <button type="submit" class="btn btn-secondary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddCard",
};
</script>
<style scoped>
.img-wrap {
  height: 100%;
  border: 2px solid #f3f3f3;
  border-radius: 10px;
}
</style>
