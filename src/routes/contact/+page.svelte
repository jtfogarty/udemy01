<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import * as Tabs from "$lib/components/ui/tabs";
  import * as Select from "$lib/components/ui/select";
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import { Textarea } from "$lib/components/ui/textarea";

  const choice = [
    { value: "customer", label: "I am already a customer" },
    { value: "word", label: "Word of Mouth" },
    { value: "search", label: "Search Engine (Bing, Google, etc)" },
    { value: "ads", label: "Advertisement" },
    { value: "other", label: "Other" }
  ];
</script>

<Tabs.Root value="sales" class="w-[900px]">
  <Tabs.List class="grid w-full grid-cols-2">
    <Tabs.Trigger value="sales">Sales</Tabs.Trigger>
    <Tabs.Trigger value="service">Service</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="sales">
    <Card.Root>
      <Card.Header>
        <Card.Title>Sales</Card.Title>
        <Card.Description>
          Your requests, opinions, and feedback are very important to us. Please complete the following form and a Rotolite of St. Louis representative will contact you.
        </Card.Description>
      </Card.Header>
      <Card.Content class="space-y-2 w-[800px]">
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
        <Textarea placeholder="Type your message here." />
        <Select.Root>
          <Select.Trigger class="w-[300px]">
            <Select.Value placeholder="Choice" />
          </Select.Trigger>
          <Select.Content>
            <Select.Group>
              <Select.Label>Please select a choice</Select.Label>
              {#each choice as choi}
                <Select.Item value={choi.value} label={choi.label}
                  >{choi.label}</Select.Item
                >
              {/each}
            </Select.Group>
          </Select.Content>
          <Select.Input name="favoriteFruit" />
        </Select.Root>
      </Card.Content>
      <Card.Footer>
        <Button>Submit</Button>
      </Card.Footer>
    </Card.Root>
  </Tabs.Content>
  <Tabs.Content value="service">
    <Card.Root>
      <Card.Header>
        <Card.Title>service</Card.Title>
        <Card.Description>
          Change your service here. After saving, you'll be logged out.
        </Card.Description>
      </Card.Header>
      <Card.Content class="space-y-2">
        <div class="space-y-1">
          <Label for="current">Current service</Label>
          <Input id="current" type="service" />
        </div>
        <div class="space-y-1">
          <Label for="new">New service</Label>
          <Input id="new" type="service" />
        </div>
      </Card.Content>
      <Card.Footer>
        <Button>Submit</Button>
      </Card.Footer>
    </Card.Root>
  </Tabs.Content>
</Tabs.Root>