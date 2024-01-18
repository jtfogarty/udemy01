<script lang="ts">
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import type { EmailData } from '$lib/types.ts';
  export let emailData: EmailData;
</script>

<div class="grid grid-cols-2 gap-4">
  <div class="space-y-1">
    <Label for="name">Name</Label>
    <Input bind:value={emailData.name} placeholder="name" />
  </div>
  <div class="space-y-1">
    <Label for="email">Email</Label>
    <Input bind:value={emailData.email} type="email" placeholder="email" />
  </div>
  <div class="space-y-1">
    <Label for="pn">Phone Number</Label>
    <Input bind:value={emailData.phone} placeholder="###-###-####" />
  </div>
  <div class="space-y-1">
    <Label for="cn">Company/Organization Name</Label>
    <Input bind:value={emailData.company} placeholder="Company/Organization Name" />
  </div>
  <div class="space-y-1">
    <Label for="an">Street Address</Label>
    <Input bind:value={emailData.street} placeholder="" />
  </div>
  <div class="space-y-1">
    <Label for="city">City</Label>
    <Input bind:value={emailData.city} placeholder="" />
  </div>
  <div class="space-y-1">
    <Label for="state">State</Label>
    <Input bind:value={emailData.state} placeholder="" />
  </div>
  <div class="space-y-1">
    <Label for="zip">Zip Code</Label>
    <Input bind:value={emailData.zip} placeholder="" />
  </div>
</div>