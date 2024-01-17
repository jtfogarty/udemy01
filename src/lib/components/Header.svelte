<script lang="ts">
    import CartButton from "./CartButton.svelte";
</script>

<nav class="">
    <img src="/roto-siteheader-960x160.jpg" alt="Rotolite of St. Louis"  class="flex-grow w-full object-cover"/>
    <div class="flex py-4 text-white font-bold">
        <ul class="flex space-x-8">
            <li>    
                <a href="/" class="hover:text-blue-500 duration-300">
                    Home
                </a>
            </li>
            <li>    
                <a href="/sales" class="hover:text-blue-500 duration-300">
                    Sales
                </a>
            </li>
            <li>    
                <a href="/printing" class="hover:text-blue-500 duration-300">
                    Printing
                </a>
            </li>             
            <li>    
                <a href="/support" class="hover:text-blue-500 duration-300">
                    Support
                </a>
            </li>
            <li>    
                <a href="/contact" class="hover:text-blue-500 duration-300">
                    Contact
                </a>
            </li>
            <li>    
                <a href="/about" class="hover:text-blue-500 duration-300">
                    About
                </a>
            </li>
        </ul>
        <div class="hidden">
            <a href="/cart">
                <CartButton />
            </a>
        </div>
    </div>
</nav>
