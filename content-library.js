export default {
  name: 'ContentLibrary',
  template: `
    <div class="tab-pane fade active show" >
      <!--contentlibrary No Data-->
      <div class="contentlibrary-nocontent" style="display: none;">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="v-center-align">
              <div class="content">
              <h2>No Content</h2>
              <p>Start adding content to your store</p>
              <button type="button" class="primary-button" id="addcontent-button" ><i class="fas fa-plus"></i> Add Content</button>
            </div>
            </div>
          </div>
        </div>
      </div>
      <!--contentlibrary No Data End-->
      <!--contentlibrary With Data start-->
      <div class="contentlibrary-data" >
      <!--Content Library Top Secton Start Here-->
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="bottom-border add-button contentlibrary-top">
            <!--Search box Here-->
            <div class="d-inline-box pright-24">
              <div class="search-fild d-inline-box">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                  </svg>
                </span>
                <input type="text" v-model="search" placeholder="Search content, tags, metadata" class="border">
                <!-- <input type="search" class="form-control" v-model="search"   placeholder="Search content, tags, metadata" class="border"> -->
            </div>
            <button type="button" class="d-inline-box icon-button"><i class="fas fa-angle-double-down"></i></button>
            </div>
            <!--Search box End Here-->
            <!-- Button Section Here-->
            <div class="d-inline-box">
              <button v-on:click="alertBtn" type="button" class="primary-button"><i class="fas fa-plus"></i> Add Content</button>
            </div>
            <!-- Button Section End Here-->                          
          </div>
        </div>
      </div>
      <!--Content Library Top Secton End Here-->
      <!-- Table Section Start Here-->
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="common-table">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col" style="width: 122px;">Content Name</th>
                    <th scope="col" style="width: 170px">&nbsp;</th>
                    <th scope="col">&nbsp;</th>
                    <th scope="col">Category</th>
                    <th scope="col">Desciption</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(content,i) in filteredContent" :key="i"> 
                    <td>
                      <img v-if="content.posters?.website !== null" class="h-80" :src="content.posters?.website[0]?.file_url" alt="" width="100" height="100" />
                    </td>
                    <td>
                      <h2>{{content.content_name}}</h2>
                      <p v-if="content.banners?.website">File Name : {{ content.banners?.website[0]?.file_name}}</p>
                    </td>
                    <td>
                      <div class="upload-btn-wrapper">
                        <button class="btn">Upload <i class="fas fa-upload"></i></button>
                        <input type="file" name="myfile">
                      </div>
                    </td>
                    <td>
                      <p><i class="fas fa-video"></i> {{content.categories[0].category_name}}</p>
                    </td>
                    <td>
                      <p><i class="fas fa-info"></i> {{content.content_desc}}</p>
                    </td>
                    <td>
                      <ul>
                        <li><a href="javascript:void(0);"><i class="fas fa-plus"></i></a></li>
                        <li><a href="javascript:void(0);"><i class="fas fa-pencil-alt"></i></a></li>
                        <li>
                          <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i class="fas fa-ellipsis-v"></i>
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <ul>
                                <li class="dropdown-item">
                                  <a href="javascript:void(0);" data-toggle="modal" data-target=".embed"><i class="fas fa-link"></i> Embed</a>
                                  <span><button type="button"><i class="fas fa-thumbtack"></i></button></span>
                                </li>
                                <li class="dropdown-item">
                                  <a href="javascript:void(0);" data-toggle="modal" data-target=".related-content-model"><i class="far fa-address-card"></i> Related Content</a>
                                  <span><button type="button"><i class="fas fa-thumbtack"></i></button></span>
                                </li>
                                <li class="dropdown-item">
                                  <a href="javascript:void(0);" data-toggle="modal" data-target=".manage-ppv-model"><i class="fab fa-centercode"></i> Manage PPV</a>
                                  <span><button type="button"><i class="fas fa-thumbtack"></i></button></span>
                                </li>
                                <li class="dropdown-item">
                                  <a href="javascript:void(0);" data-toggle="modal" data-target=".addto-playlist-model"><i class="fas fa-plus-square"></i> Add to Playlist</a>
                                  <span><button type="button"><i class="fas fa-thumbtack"></i></button></span>
                                </li>
                                <li class="dropdown-item">
                                  <a href="javascript:void(0);"><i class="fas fa-tasks"></i> Manage Ads</a>
                                  <span><button type="button"><i class="fas fa-thumbtack"></i></button></span>
                                </li>
                                <li class="dropdown-item">
                                  <a href="javascript:void(0);" data-toggle="modal" data-target=".delete-massage"><i class="fas fa-trash"></i> Delete</a>
                                  <span><button type="button"><i class="fas fa-thumbtack"></i></button></span>
                                </li>
                              </ul>                                              
                            </div>
                          </div>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>  
    </div>
  `,

  data() {
    return {
      search: "",
      contentList: [],
    }
  },
  computed: {
    filteredContent() {
      return this.contentList.filter(content => {
        return content.content_name.match(this.search);
      });
    }
  },
  async mounted() {
    document.title = 'Demo App to import components and display Content Library from MUVI';
    this.getAllContent();
  },
  methods: {
    getAllContent() {
      var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtdXZpLWNtcyIsInN1YiI6IlBCWmZSUWFJRExJbXNONjFpUkRHaklFZ0hzTFdWbmJmRUZRN1U5MFFoNkR3YjdYYjhpVGo0T1dTckFaM05OcythVk13cUQ0RjVWNk9ickxaanV4Umo3NjljWUI0TUg3WnVzMDcwQkpQWFVVMzBaRlNSSUdQXC8zRENyMGRVTnQ5eCtIXC9FMjZreTVcLzVDNks5d1B3MWtCRWxDYTNZWUpDaWVaKzgyRjVtSFVZS1NWb1ZIZ2FVdm5oQThhSzNIRGY0TU8yVnA2Sjk1Rm5KV3FUMUJab1JNWnpGSjl4b0h3VUhTaWRmeE5TQkRNMnN0alwvemtvUTFrTlBBU0NFcmFyZm9uK2V5b3hSdFZUMnlkMm5idEhqY1wvY2FBenR2REZaMFFvRmdlSU1qMjVoOE9VTFJVXC8rUDFyUW5QaWFqY2IxZWN3c09GdlhpNnQwN255VTBvNm9ycDNnUHZIc0JJRFpCXC9DTVBjc2ExSHJaY1NLMXRXVkw2M0N6U1ZUbGY1R1M4KzVGQXg2VjlwV0o0MmZMQnFaZWJBeURcL1RuSnQyZFUzV2lUQjJSMmxob1wvYmN2NFFHT0t6T3BiTE1WenNQcTBTckhmRmFpVHBcLytHRGkyT0EydmVBZkFkOVIwV3Bnb1BpXC9QdW80SEJcL3ViR1pZT0M3MUVPTGJCQWR1eUMwMmQ0WFpIY25oTkFOUnhrWDhnUHA3ZXRpWURUQno0T2c1Nk9pb2lxNHpRbklyMVVxZnpCNFFFS2tGd0c3S09KNmJvSytcL2JkU1M2enZiWElLNUNTd2NSdDVcL29BVjVsREpwc2wxeWxcL3dsQ20yU2VldXNZN2I1Z25uU2IyK0d0WnFMckNRczQ0MVJYczJJcjZpR0c0YTNzRklPQzdqK1dhczJXYitoTkFBeVNoeW9KNVJOa05IMnY5Ritkb1hMbTgrbjFxXC9SMzZZaVY0SmpzTTUyU3lLNWNSY2dVRlFvdHJtakpGcDg0TEFrVFFWXC9GMG15bnZyT2Z6alF2TFo5alJLS3JcL0RVQTk1cUMxSTVLWEU1M0RFYmgwRlI3WUdnelFvSXlTZzV1bG93UElxTmwxdU8rNlZ0a3hneGNkbm5ESXg3UlwvMkR2RktTNWdSSis2OFlFb1ZvalZaM05ZUXU5Rk9zK3AyNmM5bUNRajU2MDloakx2SGRGNXR2QmRXZkFlMWlQaFRGSTlvcmJsZU9HMThuQkF2SzFkbEoyQlVRRGJnMG9MYUN2b29wWVNoN2tTVGxOeUMyR3FlMWhMUkM5MitHOTRkZ0l2d3pIN3Qwdm5zd3Y0VzJFMUNCTUNWcThLeHpGK3d4QTlwV25MZkRwOUd1clZCOWw0SXpvOVdaZjFKQXVURFwvM1VyT05OYUEzbTl0em1EY3BjaVlvWWQ2b1RwbncxZDY4NjNSUlY4UmJycHNaY0RFWUVJM05qY2xQZkFydmg3VERJQlF2bThWS3RzVXEzQkltb054R29HYzFDQ1wvSXgxcmo4WlwvcDdPS3d1ODBkMnptcVErVytQK2poUmp4SWl3T1Q5cDlpcjdXY2JQSG8rTkRJSW50MnBhdE5ySDNwVTg4T09tYmVqZmxoOEFjPSIsImlhdCI6MTY1NTI2NjMwNCwiZXhwIjoxNjU1MzUyNzA0fQ.sim3oK0KCN2DUJHcHipVGIhDfAdkRH9VV1JAsz52DH8";
      const postdataforContent = { "query": "{ contentList(app_token:\"B6eqNRiJf5OdbCi7oZnBoy7bnWyqdnCS\",product_key:\"3D28C83C85544F0D9517DD2E7C7EEDAA\",store_key:\"1736BB2E6DDC4B34A4F0C17DDDE698D3\", content_asset_type: \"\",page: 1,per_page: 10){page_info{total_count} content_list{is_encoded is_parent content_created_date app_token product_key content_name content_uuid content_parent_uuid content_desc content_asset_type content_asset_uuid content_level categories{ category_name } video_details {reference_uuid expected_duration encoding_status encoding_end_time file_name third_party_url file_url is_feed } audio_details {reference_uuid expected_duration encoding_status encoding_end_time file_name third_party_url } posters {website{file_uuid file_url file_name} tv_apps{file_uuid file_url file_name} mobile_apps{file_uuid file_url file_name} } banners {website{file_uuid file_url file_name} tv_apps{file_uuid file_url file_name} mobile_apps{file_uuid file_url file_name}} path root_parent_uuid}}}" }
      axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
      axios.post('https://apigateway-staging.allthingsott.com/content', postdataforContent
        ).then(response => {
          this.contentList = response.data.data.contentList.content_list;
        });
    },
    alertBtn() {
      alert('Blablabla');
      this.$swal('Welcome to Vuejs Application using Sweetalert');
    }
  }
};
