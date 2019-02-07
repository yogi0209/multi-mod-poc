import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpServiceService} from '../services/http-service.service';
import {map} from 'rxjs/operators';
import {Angular2CsvComponent} from 'angular2-csv';
import {BsModalComponent, BsModalService} from 'ng2-bs3-modal';
import {HttpHeaders} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'backoffice',
  templateUrl: './back-office-home.component.html',
  styleUrls: ['./back-office-home.component.scss'],
})
export class BackOfficeHomeComponent implements OnInit {

  constructor(private httpServiceService: HttpServiceService,
              private router: Router,
              private route: ActivatedRoute,
              private modalService: BsModalService,
              private titleService: Title) {
    titleService.setTitle('Home');
  }

  data = '';
  bankList = ['ICICI',
    'HDFC',
    'DEUTSCHE_BANK',
    'SBI',
    'SDC',
    'AMBERNATH_JAI_HIND_CO_OP_BANK',
    'AXIS',
    'CORPORATION',
    'BOB',
    'CITI',
    'KOTAK',
    'YES',
    'PUNJAB_MAHARASHTRA_CO_OP_BANK',
    'SYNDICATE',
    'UNITED_BANK',
    'PNB',
    'INDUSIND',
    'CENTRAL_BANK',
    'MODEL_CO_OPERATIVE_BANK',
    'MANVI_PATTANA_SOUHARADA_SAHAKARI_BANK',
    'RBL',
    'DBS',
    'DNS',
    'HSBC',
    'CANARA',
    'STANDARD_CHARTERED',
    'ALLAHABAD',
    'UNION_BANK',
    'STATE_BANK_PATIALA',
    'STATE_BANK_MYSORE',
    'STATE_BANK_TRAVANCORE',
    'STATE_BANK_BIKANER_JAIPUR',
    'STATE_BANK_HYDERABAD',
    'BANK_OF_INDIA',
    'BANK_OF_MAHARASHTRA',
    'DENA_BANK',
    'INDIAN_BANK',
    'INDIAN_OVERSEAS',
    'ORIENTAL_BANK',
    'PUNJAB_SIND',
    'UCO',
    'VIJAYA',
    'IDBI',
    'BANDHAN',
    'CATHOLIC_SYRIAN',
    'CITY_UNION',
    'DHANLAXMI',
    'DCB',
    'FEDERAL',
    'IDFC',
    'KARNATAKA',
    'ANDHRA_BANK',
    'TAMILNAD_MERCANTILE',
    'TEXTILE_CO_OPERATIVE_BANK',
    'SARASPUR_NAGARIK_CO_OP_BANK',
    'SARVODAYA_SAHAKARI_BANK',
    'GP_PARSIK_BANK',
    'TGMC_BANK',
    'SAURASHTRA_GRAMIN_BANK',
    'JAMMU_KASHMIR',
    'KARUR_VYASA',
    'LAKSHMI_VILAS',
    'NAINITAL',
    'SOUTH_INDIAN',
    'RBS',
    'JANATA_SAHAKARI_BANK',
    'AU_SMALL_FINANCE_BANK',
    'MJALGAON_JANATA_SAHAKARI_BANK',
    'BANK_OF_BARODA',
    'SARASWAT_BANK',
    'TJSB',
    'DNB',
    'GREATER_BOMBAY',
    'AKHAND_ANAND',
    'BASSEIN_CATHOLIC',
    'BHARAT',
    'SVC_BANK',
    'SREENIDHI_SOUHARDA_SAHAKARI_BANK',
    'OCEAN_FIRST',
    'APNA_SAHAKARI_BANK',
    'CAPITAL_SMALL_FINANCE_BANK_LTD',
    'KALUPUR_COMMERCIAL_CO_OP_BANK',
    'KANGRA_CO_OP_BANK',
    'BHARTIYA_MAHILA_BANK',
    'SARDAR_BHILADWALA_PARDI_PEOPLES_CO_OP_BANK',
    'MEHSANA_URBAN_CO_OP_BANK',
    'NEW_INDIA_CO_OP_BANK',
    'THE_NARODA_NAGRIK_CO_OP_BANK',
    'COSMOS_BANK',
    'JANAKALYAN_SAHAKARI_BANK',
    'CENTRAL_CO_OPERATIVE_BANK',
    'NUTAN_NAGARIK_SAHAKARI_BANK',
    'KALYAN_JANATA_SAHAKARI_BANK',
    'ABHYUDAYA_CO_OP_BANK',
    'AIRTEL_BANK',
    'EQUITAS_SMALL_FINANCE_BANK',
    'NAGPUR_NAGARIK_SAHAKARI_BANK',
    'JANASEVA_SAHAKARI_BANK',
    'SHREE_KADI_NAGARIK_SAHAKARI_BANK',
    'ASSOCIATE_CO_OP_BANK',
    'SOLAPUR_JANATA_SAHAKARI_BANK',
    'INDRAPRASTHA_SEHKARI_BANK',
    'MAHESH_SAHAKARI_BANK_LTD',
    'PUNE_PEOPLES_CO_OP_BANK',
    'VASAI_VIKAS_SAH_BANK_LTD',
    'MAHESH_BANK',
    'UNION_CO_OP_BANK_LTD',
    'JANATHA_SEVA_CO_OP_BANK',
    'The_Wai_Urban_Co_Operative_Bank_Limited',
    'The_Vallabh_VidyaNagar_Commercial_Co_Operative_Bank_Ltd',
    'THE_VIJAY_CO_OP_BANK',
    'ZOROASTRIAN_CO_OP_BANK',
    'VAIJAPUR_MARCHANTS_CO_OP_BANK',
    'NKGSB_CO_OP_BANK',
    'THE_SUTEX_CO_OP_BANK',
    'THE_SURAT_PEOPLE_CO_OP_BANK_LTD',
    'GUJARAT_AMBUJA_CO_OP_BANK_LTD',
    'KANKARIAA_MANINAGAR_NAG_SAH_BANK_LTD',
    'UJJIVAN_SMALL_FINANCE_BANK',
    'CITIZEN_CREDIT_CO_OP_BANK',
    'PADMAVATHI_CO_OP_URBAN_BANK',
    'THE_SATARA_SAHAKARI_BANK_LTD',
    'MAHANAGAR_CO_OP_BANK_LTD',
    'SURYODAY_SMALL_FINANCE_BANK_LTD',
    'SHREE_CO_OP_BANK_LTD',
    'MANINAGAR_CO_OP_BANK_LTD',
    'THE_VARACHHA_CO_OP_BANK_LTD',
    'SURAT_NATIONAL_CO_OP_BANK_LTD',
    'THE_KARAD_URBAN_CO_OP_BANK_LTD',
    'MAGAVEERA_CO_OP_BANK_LTD',
    'THE_PANCHSHEEL_MERCANTILE_CO_OP_BANK_LTD',
    'MAGAVEERA_CO_OP_BANK_LTD',
    'THANE_BHARAT_SAHAKARI_BANK_LTD',
    'SREE_MAHAYOGI_LAKSHMAMMA_CO_OP_BANK_LTD',
    'VIDARBHA_MERCHANTS_URBAN_CO_OP_BANK_LTD',
    'PRATHAMA_BANK'
  ];
  columnDefs = [
    {
      headerName: ' ', field: 'RowSelect', checkboxSelection: true, headerCheckboxSelection: function (params) {
      console.log('-----------header------------', params)
      var checkBox = document.createElement('input');
      checkBox.setAttribute('type', 'checkbox');

      var eHeader = document.createElement('label');
      var eTitle = document.createTextNode(params.colDef.headerName);
      eHeader.appendChild(checkBox);
      eHeader.appendChild(eTitle);

      checkBox.addEventListener('change', function (e) {
        if ($(this)[0].checked) {
          params.api.selectAll();
        } else {
          params.api.deselectAll();
        }
      });

      return eHeader;
    }
    },
    {
      headerName: 'Make', field: 'make'
    },
    {
      headerName: 'Model', field:
      'model', cellClass:
      'cursor-pointer'
    }
    ,
    {
      headerName: 'Price', field:
      'price'
    }
  ];

  rowData = [
    {make: 'Toyota', model: 'Celica', price: 35000},
    {make: 'Ford', model: 'Mondeo', price: 32000},
    {make: 'Porsche', model: 'Boxter', price: 72000}
  ];
  gridOptions = {};
  email = '';

  postData = JSON.stringify({
    'email': 'abhishek.sharma@loanframe.com',
    'password': 'testapp123!',
    'authType': 'LoanFrame',
    'captchaResponse': '03AO9ZY1C1jVMNsfLkZHq-kZxLU5KkoYLAknUne5dXxVwSeME_fB4zQdxhPC2mJCwx03fdeutVzQnqQkfFtVDaUdg9bbrszyjZbp5tjH0AL8VYch6RfjCvbDZXDfqgOEr41LlGRRbjqQ-qCCy6G5_1K4VlxwKLl4mXZqXs7ZelljWiU-Mj8YuaH0fd6kXrG6zQzYGV63vrlxcbWkPBcRNsR0UApqvurG8D24o2Bes0IlNACpcnlHpCnzZA85jgkyr4AQ7OTZRl-G6YD1haP4aLlwbNoxd30H4g3sfRvv4zFB5twEzLS07_MAwS-2tN9qm_PXmvP9Bq1yHRuzbd8ZK2wLhForH7XUiFFEd8O6uWM7sA5CL86DyV4lG-6b4ZK3JqZayYkCXmkAAe 71'
  });

  @ViewChild('checkModal')
  checkModal: BsModalComponent;

  gridApi:any = {};

  ngOnInit() {
    var _that = this;
    this.gridOptions = {
      rowSelection: 'multiple',
      rowDeselection: true,
      suppressRowClickSelection: true,
      rowData: this.rowData,
      columnDefs: this.columnDefs,
      onGridReady: function (params) {
        _that.gridApi = params.api;
      },
      onRowSelected: function (params) {
        console.log(_that.gridApi.getSelectedRows());
      }
    };
  }

  getData() {
    this.httpServiceService.getData().pipe(
      map(data => data.toString())
    ).subscribe(data => {
      console.log('inside subscribe next', data);
      this.data = data;
    }, error => {
      console.log('inside error');
      console.log(error);
    });
  }

  generateCsv() {
    const csvObject = new Angular2CsvComponent();
    csvObject.data = this.bankList;
    csvObject.filename = 'Loan Transactions Report';
    const options = {
      filename: 'Loan Transactions Report',
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: false,
      headers: ['Name'],
      showTitle: true,
      title: '',
      useBom: false,
      removeNewLines: true,
      keys: []
    };
    csvObject.options = options;
    csvObject.generateCsv();
  }

  open() {
    this.checkModal.open();
  }

  close() {
    console.log('closing');
    this.checkModal.close();
  }

  login() {

    const headers = new HttpHeaders();
    headers.append('ContentType', 'application/json');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.httpServiceService.login(this.postData, httpOptions).subscribe(data => {
      console.log('data', data);
    }, error => {
      console.log('error', error);
    });
  }

  dashboard() {
    this.router.navigate(['dashboard'], {relativeTo: this.route});
  }

  change() {
    console.log('hello');
    this.router.navigate(['app/city'], {queryParams: {showPaid: 'false'}});
  }
}
