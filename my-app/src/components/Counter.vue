<template>
    <div>
        <h2>The Count is: {{ count }}</h2>

        <p><button @click="count += 1">ADD</button></p>

    </div>
</template>

<script>
export default {
  data() {
    return { count: 0 };
  },
};
</script>
