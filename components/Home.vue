<!-- Please remove this file from your project -->
<template>
  <div>
    <div @click="openModal()"
      class="bg-white fixed bottom-10 right-1 lg:right-10 mr-2 text-gray-700 border hover:shadow transition-all  select-none h-10 z-10 m-auto cursor-pointer rounded-full">
      <svg width="40" height="40" viewBox="0 0 16 16" class="justify-center inline-block">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path
            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
            fill="currentColor"></path>
        </g>
      </svg>
    </div>
    <div class="flex flex-wrap p-2" v-if="data_recipe.length > 0">
      <div class="rounded-md  p-4 m-2 border cursor-pointer hover:shadow transition-all  h-72 w-72 block"
        v-for="(rowdata, i) in data_recipe" :key="i">
        <div class="flex ">
          <div class=" text-blue-600 text-left text-lg mb-2   break-all truncate  w-full">
            {{ rowdata.data.Name }}
          </div>
          <Menu as="div" class="text-right relative">
            <MenuButton>
              <svg width="20" height="20" viewBox="0 0 16 16"
                class="justify-center inline-block text-gray-500 hover:bg-gray-100 rounded-full">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <path
                    d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                    fill="currentColor"></path>
                </g>
              </svg>
            </MenuButton>

            <MenuItems
              class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white border  focus:outline-none">
              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                <button @click="editRecipe(rowdata, i)" :class="[
                  active ? 'bg-gray-100 ' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]">
                  <svg viewBox="0 0 16 16" class="justify-center inline-block text-gray-500 mr-2 h-5 w-5">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <path
                        d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                        fill="currentColor"></path>
                    </g>
                  </svg>
                  Edit
                </button>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                <button @click="deleteData(rowdata.uuid, i)" :class="[
                  active ? 'bg-gray-100 ' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]">
                  <svg viewBox="0 0 16 16" class="justify-center inline-block text-gray-500 mr-2 h-5 w-5">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <path
                        d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
                        fill="currentColor"></path>
                    </g>
                  </svg>
                  Delete
                </button>
                </MenuItem>
              </div>

            </MenuItems>
          </Menu>
        </div>
        <hr />
        <div><span class="text-xs text-gray-500">Ingredients : {{rowdata.data.Ingredients.length}}</span></div>
        <div class="block overflow-auto h-[200px] scrollbar-hide">
          <div class="inline-flex flex-wrap  ">
            <div class="break-all truncate p-2 rounded-full bg-gray-100 m-1"
              v-for="(row, i) in rowdata.data.Ingredients" :key="i"> <span class=" text-sm"> {{ row.name }}</span></div>

          </div>
        </div>
      </div>
    </div>
    <div class="p-2 text-sm text-center block" v-else>
      <svg width="50" height="50" viewBox="0 0 16 16" class="justify-center inline-block text-gray-500">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path
            d="M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313ZM13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A4.92 4.92 0 0 0 13 5.698ZM14 4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13V4Zm-1 4.698V10c0 .374-.356.875-1.318 1.313C10.766 11.729 9.464 12 8 12s-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777A4.92 4.92 0 0 0 13 8.698Zm0 3V13c0 .374-.356.875-1.318 1.313C10.766 14.729 9.464 15 8 15s-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13s3.022-.289 4.096-.777c.324-.147.633-.323.904-.525Z"
            fill="currentColor"></path>
        </g>
      </svg>
      <div>
        <span class="text-gray-500">No Recipe Information </span>
        <b @click="openModal()" class="text-gray-600 underline cursor-pointer">Add now</b>
      </div>
    </div>
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-10">
        <div class="fixed inset-0 bg-black bg-opacity-25" />

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4 text-center">

            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle border transition-all">
              <DialogTitle as="h3" class="text-lg font-medium leading-6 text-blue-600 text-center">
                {{ Edit ? `Edit Recipe` : 'Add New Recipe' }}
              </DialogTitle>
              <form v-if="!Edit" v-on:submit.prevent="closeModal(), addData()">
                <div class="mt-2 block">
                  <div class="relative z-0 mb-6 w-full group">
                    <input type="text" name="Recipe_Title" id="Recipe_Title"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" " required v-model="DataAdd.Name" autocomplete="off" />
                    <label for="Recipe_Title"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Recipe Title</label>
                  </div>
                  <div class="flex" v-for="(row, i) in DataAdd.Ingredients" :key="i">
                    <div class="relative z-0 mb-6 w-full group">
                      <input type="text" :name="`Ingredients${i}`" :id="`Ingredients${i}`"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required v-model="DataAdd.Ingredients[i].name" autocomplete="off" />
                      <label :for="`Ingredients${i}`"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Ingredients {{ i + 1 }}</label>
                    </div>
                    <div class="text-center text-gray-600 p-2 " v-if="i != 0">
                      <svg width="20" height="20" viewBox="0 0 16 16" @click="DataAdd.Ingredients.splice(i, 1)"
                        class="cursor-pointer justify-center inline-block rounded-md  text-gray-500">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <path
                            d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
                            fill="currentColor"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="text-center text-gray-600  p-2 ">
                  <svg width="40" height="40" viewBox="0 0 16 16" @click="DataAdd.Ingredients.push({ name: '' })"
                    class="cursor-pointer justify-center inline-block rounded-md ">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <path
                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                        fill="currentColor"></path>
                    </g>
                  </svg>
                </div>
                <div class="mt-4 text-center">
                  <button type="submit"
                    class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                    Add
                  </button>
                </div>
              </form>
              <form v-else v-on:submit.prevent="closeModal(), editData()">
                <div class="mt-2 block">
                  <div class="relative z-0 mb-6 w-full group">
                    <input type="text" name="Recipe_Title" id="Recipe_Title"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" " required v-model="DataEdit.data.Name" autocomplete="off" />
                    <label for="Recipe_Title"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Recipe Title</label>
                  </div>
                  <div class="flex" v-for="(row, i) in DataEdit.data.Ingredients" :key="i">
                    <div class="relative z-0 mb-6 w-full group">
                      <input type="text" :name="`Ingredients${i}`" :id="`Ingredients${i}`"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required v-model="DataEdit.data.Ingredients[i].name" autocomplete="off" />
                      <label :for="`Ingredients${i}`"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Ingredients {{ i + 1 }}</label>
                    </div>
                    <div class="text-center text-gray-600 p-2 " v-if="i != 0">
                      <svg width="20" height="20" viewBox="0 0 16 16" @click="DataEdit.data.Ingredients.splice(i, 1)"
                        class="cursor-pointer justify-center inline-block rounded-md  text-gray-500">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <path
                            d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
                            fill="currentColor"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="text-center text-gray-600  p-2 ">
                  <svg width="40" height="40" viewBox="0 0 16 16" @click="DataEdit.data.Ingredients.push({ name: '' })"
                    class="cursor-pointer justify-center inline-block rounded-md ">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <path
                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                        fill="currentColor"></path>
                    </g>
                  </svg>
                </div>
                <div class="mt-4 text-center">
                  <button type="submit"
                    class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                    Edit
                  </button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup>
import {
  TransitionRoot,
  Dialog,
  DialogPanel,
  DialogTitle,
  Menu, MenuButton, MenuItems, MenuItem
} from '@headlessui/vue'

const { data: data_recipe } = await useFetch('/api/recipe') || []
const isOpen = ref(false);
const Edit = ref(false);
const DataAdd = ref({
  Name: '',
  Ingredients: [
    {
      name: ''
    }
  ]
})
const DataEdit = ref({
  uuid: '',
  i: '',
  data: {
    Name: '',
    Ingredients: [
      {
        name: ''
      }
    ]
  }
})


  onMounted(async () => {
  

  });

//


const closeModal = () => {
  isOpen.value = false

}
const openModal = () => {
  isOpen.value = true
  Edit.value = false;
}


const addData = async () => {
  $fetch('/api/recipe_add', {
    method: 'POST',
    body: {
      data: DataAdd.value
    }
  }).then((res) => {

    data_recipe.value.push({
      uuid: res,
      data: DataAdd.value
    });
    DataAdd.value = {
      Name: '',
      Ingredients: [
        {
          name: ''
        }
      ]
    }
  })
}

const editRecipe = (data, i) => {
  let valuedata = data;
  Edit.value = true;
  DataEdit.value = JSON.parse(JSON.stringify(valuedata));
  DataEdit.value.i = i;
  isOpen.value = true;

}
const editData = async () => {
  $fetch('/api/recipe_edit', {
    method: 'POST',
    body: {
      data: DataEdit.value
    }
  }).then((res) => {
    if (res == 1) {
      data_recipe.value[DataEdit.value.i] = DataEdit.value
    }
  })
}
const deleteData = async (data, i) => {
  $fetch('/api/recipe_delete', {
    method: 'POST',
    body: {
      data: data
    }
  }).then((res) => {
    if (res == 1) {
      data_recipe.value.splice(i, 1)
    }
  })
}

</script>
