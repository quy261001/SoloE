<template>
    <div>
        <Head>
            <Title>Nuxt Dojo | {{ product.title }}</Title>
            <Meta name="description" :content="product.description" />
        </Head>
        <ProductDetails :productDetai = "product"/>
    </div>
</template>

<script setup>
    const { id } = useRoute().params 
    console.log(id)

    const uri = 'https://63ee0cf4d466e0c18ba84d91.mockapi.io/api/shopxp/Api/' + id
    // fetch the 
    const {data: product} = await useFetch(uri, {key: id}) 
    if (!product.value) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Product not Found',
            fatal: true
        })
    }
    definePageMeta({
        layout: 'products'
    })
</script>

<style scoped>

</style>