<script lang="ts">
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
</script>

<div class="grid grid-cols-2 gap-4">
  <div class="space-y-1">
    <Label for="name">Name</Label>
    <Input id="name" placeholder="name" />
  </div>
  <div class="space-y-1">
    <Label for="email">Email</Label>
    <Input id="email" type="email" placeholder="email" />
  </div>
  <div class="space-y-1">
    <Label for="pn">Phone Number</Label>
    <Input id="pn-01" placeholder="###-###-####" />
  </div>
  <div class="space-y-1">
    <Label for="cn">Company/Organization Name</Label>
    <Input id="coname" placeholder="Company/Organization Name" />
  </div>
  <div class="space-y-1">
    <Label for="an">Street Address</Label>
    <Input id="addr" placeholder="" />
  </div>
  <div class="space-y-1">
    <Label for="city">City</Label>
    <Input id="city" placeholder="" />
  </div>
  <div class="space-y-1">
    <Label for="state">State</Label>
    <Input id="state" placeholder="" />
  </div>
  <div class="space-y-1">
    <Label for="zip">Zip Code</Label>
    <Input id="zip" placeholder="" />
  </div>
</div>