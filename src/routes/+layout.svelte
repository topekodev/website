<script>
    // Styles
    import '$lib/styles/app.css';
    // Components
    import Navbar from '$lib/components/Nav.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
    
</svelte:head>

<Navbar />
<main>
    <slot />
</main>
<Footer />