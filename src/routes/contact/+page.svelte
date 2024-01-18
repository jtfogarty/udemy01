<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import * as Tabs from "$lib/components/ui/tabs";
  import * as Select from "$lib/components/ui/select";
  import { Button } from "$lib/components/ui/button";
  import { Textarea } from "$lib/components/ui/textarea";
	import CardEmail from "$lib/components/CardEmail.svelte";
  import type { EmailData } from '$lib/types.ts';

  const choice = [
    { value: "customer", label: "I am already a customer" },
    { value: "word", label: "Word of Mouth" },
    { value: "search", label: "Search Engine (Bing, Google, etc)" },
    { value: "ads", label: "Advertisement" },
    { value: "other", label: "Other" }
  ];
 
  let emailData: EmailData = { name: '', email: '', phone: '', company: '', street: '', city: '', state: '', zip: '', subject: ''};

  interface FormData {

  }

  // Function to handle button click (submission)
  function handleSubmit() {
        console.log('Email Data:', emailData);
        // Process the email data here...
    }
</script>

<Tabs.Root value="sales" class="w-[900px] mb-2">
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
      <Card.Content class="space-y-2">
        <CardEmail bind:emailData/>
        <Textarea placeholder="Type your message here." />
        <Select.Root bind:value={emailData.found}>
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
        <Card.Title>Service</Card.Title>
        <Card.Description>
          Your requests, opinions, and feedback are very important to us. Please complete the following form and a Rotolite of St. Louis representative will contact you.
        </Card.Description>
      </Card.Header>
      <Card.Content class="space-y-2">
        <CardEmail bind:emailData/>
      </Card.Content>
      <Card.Footer>
        <Button on:click={handleSubmit}>Submit</Button>
      </Card.Footer>
    </Card.Root>
  </Tabs.Content>
</Tabs.Root>