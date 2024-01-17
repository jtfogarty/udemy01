<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import * as Tabs from "$lib/components/ui/tabs";
  import * as Select from "$lib/components/ui/select";
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import { Textarea } from "$lib/components/ui/textarea";
	import CardEmail from "$lib/components/CardEmail.svelte";

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
        <CardEmail />
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
        <CardEmail />
      </Card.Content>
      <Card.Footer>
        <Button>Submit</Button>
      </Card.Footer>
    </Card.Root>
  </Tabs.Content>
</Tabs.Root>