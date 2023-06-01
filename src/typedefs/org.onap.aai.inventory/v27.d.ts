import * as Primitive from '../xml-primitives';

// Source files:
// http://127.0.0.1:8080/aai_schema_v27.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
interface _AaiInternalType extends BaseType {
	edgePropnames?: EdgePropnamesType[];
	reservedPropnames?: ReservedPropnamesType[];
}
interface AaiInternalType extends _AaiInternalType { constructor: { new(): AaiInternalType }; }

interface _ActionDataType extends BaseType {
	propertyName?: string;
	propertyValue?: string;
}
interface ActionDataType extends _ActionDataType { constructor: { new(): ActionDataType }; }

interface _ActionsType extends BaseType {
	notify?: NotifyType;
	update?: UpdateType;
}
interface ActionsType extends _ActionsType { constructor: { new(): ActionsType }; }

interface _ActionType extends BaseType {
	actionData?: ActionDataType[];
	actionType?: string;
}
interface ActionType extends _ActionType { constructor: { new(): ActionType }; }

interface _ActivitiesType extends BaseType {
	activity?: ActivityType[];
}
interface ActivitiesType extends _ActivitiesType { constructor: { new(): ActivitiesType }; }

interface _ActivityStatesType extends BaseType {
	activityState?: ActivityStateType[];
}
interface ActivityStatesType extends _ActivityStatesType { constructor: { new(): ActivityStatesType }; }

interface _ActivityStateType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	stateName?: string;
	stateOrder?: number;
	stateView?: string;
}
interface ActivityStateType extends _ActivityStateType { constructor: { new(): ActivityStateType }; }

interface _ActivityType extends BaseType {
	activityCreator?: string;
	activityDescription?: string;
	activityFunction?: string;
	activityId?: string;
	activityName?: string;
	activityRole?: string;
	activityStates?: ActivityStatesType;
	activityType?: string;
	currentState?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	reflectedState?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	timestamp?: string;
	timestampExpiration?: string;
	timestampLastupdated?: string;
}
interface ActivityType extends _ActivityType { constructor: { new(): ActivityType }; }

interface _AddressFamiliesType extends BaseType {
	addressFamily?: AddressFamilyType[];
}
interface AddressFamiliesType extends _AddressFamiliesType { constructor: { new(): AddressFamiliesType }; }

interface _AddressFamilyType extends BaseType {
	addressFamilyid?: string;
	afFunction?: string;
	afRole?: string;
	afSubtype?: string;
	afType?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	maxPrefixthreshold?: number;
	maxPrefixv4?: number;
	maxPrefixv6?: number;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface AddressFamilyType extends _AddressFamilyType { constructor: { new(): AddressFamilyType }; }

interface _AggregatedEtheroptionsType extends BaseType {
	aggregatedEtheroption?: AggregatedEtheroptionType[];
}
interface AggregatedEtheroptionsType extends _AggregatedEtheroptionsType { constructor: { new(): AggregatedEtheroptionsType }; }

interface _AggregatedEtheroptionType extends BaseType {
	aggregatedEtheroptionid?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	lacps?: LacpsType;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface AggregatedEtheroptionType extends _AggregatedEtheroptionType { constructor: { new(): AggregatedEtheroptionType }; }

interface _AggregateRoutesType extends BaseType {
	aggregateRoute?: AggregateRouteType[];
}
interface AggregateRoutesType extends _AggregateRoutesType { constructor: { new(): AggregateRoutesType }; }

interface _AggregateRouteType extends BaseType {
	aggRouteid?: string;
	cidrMask?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	ipVersion?: string;
	networkAddress?: string;
	networkStartaddress?: string;
	nextHop?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	routePath?: string;
}
interface AggregateRouteType extends _AggregateRouteType { constructor: { new(): AggregateRouteType }; }

interface _AllottedResourcesType extends BaseType {
	allottedResource?: AllottedResourceType[];
}
interface AllottedResourcesType extends _AllottedResourcesType { constructor: { new(): AllottedResourcesType }; }

interface _AllottedResourceType extends BaseType {
	accessClientid?: string;
	accessLtpid?: string;
	accessNodeid?: string;
	accessProviderid?: string;
	accessTopologyid?: string;
	allottedResourcename?: string;
	cvlan?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	description?: string;
	id?: string;
	modelInvariantid?: string;
	modelVersionid?: string;
	operationalStatus?: string;
	orchestrationStatus?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	role?: string;
	selflink?: string;
	tunnelXconnects?: TunnelXconnectsType;
	type?: string;
	vpnName?: string;
}
interface AllottedResourceType extends _AllottedResourceType { constructor: { new(): AllottedResourceType }; }

interface _AutonomousSystemsType extends BaseType {
	autonomousSystem?: AutonomousSystemType[];
}
interface AutonomousSystemsType extends _AutonomousSystemsType { constructor: { new(): AutonomousSystemsType }; }

interface _AutonomousSystemType extends BaseType {
	autonomousSystemid?: string;
	autonomousSystemnumber?: number;
	autonomousSystemregion?: string;
	autonomousSystemrole?: string;
	autonomousSystemtype?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface AutonomousSystemType extends _AutonomousSystemType { constructor: { new(): AutonomousSystemType }; }

interface _AvailabilityZonesType extends BaseType {
	availabilityZone?: AvailabilityZoneType[];
}
interface AvailabilityZonesType extends _AvailabilityZonesType { constructor: { new(): AvailabilityZonesType }; }

interface _AvailabilityZoneType extends BaseType {
	availabilityZonename?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	hypervisorType?: string;
	operationalStatus?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface AvailabilityZoneType extends _AvailabilityZoneType { constructor: { new(): AvailabilityZoneType }; }

interface _AvailableBandwidthmapType extends BaseType {
	availableBandwidth?: AvailableBandwidthType[];
}
interface AvailableBandwidthmapType extends _AvailableBandwidthmapType { constructor: { new(): AvailableBandwidthmapType }; }

interface _AvailableBandwidthType extends BaseType {
	abId?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	number?: number;
	oduType?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	selflink?: string;
}
interface AvailableBandwidthType extends _AvailableBandwidthType { constructor: { new(): AvailableBandwidthType }; }

interface _AzAnddvsswitchesType extends BaseType {
	availabilityZone?: AvailabilityZoneType;
	dvsSwitches?: DvsSwitchesType;
}
interface AzAnddvsswitchesType extends _AzAnddvsswitchesType { constructor: { new(): AzAnddvsswitchesType }; }

interface _BandwidthAttributesType extends BaseType {
	bandwidthAttribute?: BandwidthAttributeType[];
}
interface BandwidthAttributesType extends _BandwidthAttributesType { constructor: { new(): BandwidthAttributesType }; }

interface _BandwidthAttributeType extends BaseType {
	availableBandwidthmap?: AvailableBandwidthmapType;
	bwaId?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	selflink?: string;
}
interface BandwidthAttributeType extends _BandwidthAttributeType { constructor: { new(): BandwidthAttributeType }; }

interface _BfdsType extends BaseType {
	bfd?: BfdType[];
}
interface BfdsType extends _BfdsType { constructor: { new(): BfdsType }; }

interface _BfdType extends BaseType {
	bfdFunction?: string;
	bfdId?: string;
	bfdKeepalive?: string;
	bfdMultihop?: string;
	bfdRole?: string;
	bfdTimeout?: string;
	bfdType?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	minimumInterval?: number;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface BfdType extends _BfdType { constructor: { new(): BfdType }; }

interface _BgpGroupsType extends BaseType {
	bgpGroup?: BgpGroupType[];
}
interface BgpGroupsType extends _BgpGroupsType { constructor: { new(): BgpGroupsType }; }

interface _BgpGroupType extends BaseType {
	addressFamilies?: AddressFamiliesType;
	bgpGroupfunction?: string;
	bgpGroupid?: string;
	bgpGroupname?: string;
	bgpGrouprole?: string;
	bgpGrouptype?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	description?: string;
	localAddress?: string;
	localAs?: number;
	opsNote?: string;
	peerAddress?: string;
	peerAs?: number;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface BgpGroupType extends _BgpGroupType { constructor: { new(): BgpGroupType }; }

interface _BgpNeighborsType extends BaseType {
	bgpNeighbor?: BgpNeighborType[];
}
interface BgpNeighborsType extends _BgpNeighborsType { constructor: { new(): BgpNeighborsType }; }

interface _BgpNeighborType extends BaseType {
	addressFamilies?: AddressFamiliesType;
	bgpNeighborfunction?: string;
	bgpNeighborid?: string;
	bgpNeighborrole?: string;
	bgpNeighbortype?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	description?: string;
	ignoreConnectedcheck?: boolean;
	localAddress?: string;
	localAs?: number;
	opsNote?: string;
	peerAddress?: string;
	peerAs?: number;
	peerHostname?: string;
	provStatus?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface BgpNeighborType extends _BgpNeighborType { constructor: { new(): BgpNeighborType }; }

interface _BusinessType extends BaseType {
	connectors?: ConnectorsType;
	customers?: CustomersType;
	linesOfbusiness?: LinesOfbusinessType;
	owningEntities?: OwningEntitiesType;
	platforms?: PlatformsType;
	projects?: ProjectsType;
	spPartners?: SpPartnersType;
}
interface BusinessType extends _BusinessType { constructor: { new(): BusinessType }; }

interface _CablesType extends BaseType {
	cable?: CableType[];
}
interface CablesType extends _CablesType { constructor: { new(): CablesType }; }

interface _CableType extends BaseType {
	cableName?: string;
	cableType?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface CableType extends _CableType { constructor: { new(): CableType }; }

interface _CardSlotsType extends BaseType {
	cardSlot?: CardSlotType[];
}
interface CardSlotsType extends _CardSlotsType { constructor: { new(): CardSlotsType }; }

interface _CardSlotType extends BaseType {
	cards?: CardsType;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	slotName?: string;
}
interface CardSlotType extends _CardSlotType { constructor: { new(): CardSlotType }; }

interface _CardsType extends BaseType {
	card?: CardType[];
}
interface CardsType extends _CardsType { constructor: { new(): CardsType }; }

interface _CardType extends BaseType {
	cardType?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	pluggableSlots?: PluggableSlotsType;
	ports?: PortsType;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface CardType extends _CardType { constructor: { new(): CardType }; }

interface _CellsType extends BaseType {
	cell?: CellType[];
}
interface CellsType extends _CellsType { constructor: { new(): CellsType }; }

interface _CellType extends BaseType {
	azimuth?: number;
	beamwidth?: number;
	cellId?: string;
	cellLocalid?: string;
	cellName?: string;
	cellType?: string;
	coverageArea?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	electricalTilt?: number;
	frequencyBand?: string;
	height?: number;
	latitude?: number;
	longitude?: number;
	mcc?: string;
	mechanicalTilt?: number;
	mnc?: string;
	mnoId?: string;
	neighbours?: NeighboursType;
	nodeId?: string;
	radioAccesstechnology?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	selflink?: string;
}
interface CellType extends _CellType { constructor: { new(): CellType }; }

interface _ChassiesType extends BaseType {
	chassis?: ChassisType[];
}
interface ChassiesType extends _ChassiesType { constructor: { new(): ChassiesType }; }

interface _ChassisType extends BaseType {
	adminState?: string;
	assetTag?: string;
	cardSlots?: CardSlotsType;
	chassisDescription?: string;
	chassisName?: string;
	chassisRole?: string;
	chassisType?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	equipIdentifier?: string;
	equipModel?: string;
	equipVendor?: string;
	licenses?: LicensesType;
	operatingSystem?: string;
	orchestrationStatus?: string;
	partNumber?: string;
	pluggableSlots?: PluggableSlotsType;
	ports?: PortsType;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	serialNumber?: string;
	slotNumber?: number;
}
interface ChassisType extends _ChassisType { constructor: { new(): ChassisType }; }

interface _ClassesOfserviceType extends BaseType {
	classOfservice?: ClassOfserviceType[];
}
interface ClassesOfserviceType extends _ClassesOfserviceType { constructor: { new(): ClassesOfserviceType }; }

interface _ClassMapmembersType extends BaseType {
	classMapmember?: ClassMapmemberType[];
}
interface ClassMapmembersType extends _ClassMapmembersType { constructor: { new(): ClassMapmembersType }; }

interface _ClassMapmemberType extends BaseType {
	action?: string;
	actionType?: string;
	classMapmemberid?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	memberType?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	sequenceNumber?: string;
}
interface ClassMapmemberType extends _ClassMapmemberType { constructor: { new(): ClassMapmemberType }; }

interface _ClassMapsType extends BaseType {
	classMap?: ClassMapType[];
}
interface ClassMapsType extends _ClassMapsType { constructor: { new(): ClassMapsType }; }

interface _ClassMapType extends BaseType {
	classMapfunction?: string;
	classMapid?: string;
	classMapname?: string;
	classMaprole?: string;
	classMaptype?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	direction?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface ClassMapType extends _ClassMapType { constructor: { new(): ClassMapType }; }

interface _ClassOfserviceType extends BaseType {
	cos?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	probeId?: string;
	probeType?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface ClassOfserviceType extends _ClassOfserviceType { constructor: { new(): ClassOfserviceType }; }

interface _CloudInfrastructureType extends BaseType {
	cloudRegions?: CloudRegionsType;
	complexes?: ComplexesType;
	endpoints?: EndpointsType;
	geoRegions?: GeoRegionsType;
	networkProfiles?: NetworkProfilesType;
	networkTechnologies?: NetworkTechnologiesType;
	operationalEnvironments?: OperationalEnvironmentsType;
	pservers?: PserversType;
	virtualDatacenters?: VirtualDatacentersType;
}
interface CloudInfrastructureType extends _CloudInfrastructureType { constructor: { new(): CloudInfrastructureType }; }

interface _CloudRegionsType extends BaseType {
	cloudRegion?: CloudRegionType[];
}
interface CloudRegionsType extends _CloudRegionsType { constructor: { new(): CloudRegionsType }; }

interface _CloudRegionType extends BaseType {
	activities?: ActivitiesType;
	availabilityZones?: AvailabilityZonesType;
	cloudExtrainfo?: string;
	cloudFunction?: string;
	cloudOwner?: string;
	cloudRegionid?: string;
	cloudRegionnumber?: number;
	cloudRegionnumberdefinition?: string;
	cloudRegionversion?: string;
	cloudRole?: string;
	cloudType?: string;
	cloudZone?: string;
	complexName?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	dvsSwitches?: DvsSwitchesType;
	esrSysteminfolist?: EsrSysteminfolistType;
	flavors?: FlavorsType;
	groupAssignments?: GroupAssignmentsType;
	hostAggregates?: HostAggregatesType;
	hpaCapabilities?: HpaCapabilitiesType;
	identityUrl?: string;
	images?: ImagesType;
	inMaint?: boolean;
	oamNetworks?: OamNetworksType;
	opsNote?: string;
	orchestrationDisabled?: boolean;
	ownerDefinedtype?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	snapshots?: SnapshotsType;
	sriovAutomation?: string;
	status?: string;
	tenants?: TenantsType;
	upgradeCycle?: string;
	validationAudits?: ValidationAuditsType;
	vipIpv4addresslist?: VipIpv4addresslistType[];
	vipIpv6addresslist?: VipIpv6addresslistType[];
	vlanRanges?: VlanRangesType;
	volumeGroups?: VolumeGroupsType;
}
interface CloudRegionType extends _CloudRegionType { constructor: { new(): CloudRegionType }; }

interface _CollectionsType extends BaseType {
	collection?: CollectionType[];
}
interface CollectionsType extends _CollectionsType { constructor: { new(): CollectionsType }; }

interface _CollectionType extends BaseType {
	collectionCustomizationid?: string;
	collectionFunction?: string;
	collectionId?: string;
	collectionName?: string;
	collectionRole?: string;
	collectionType?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	modelInvariantid?: string;
	modelVersionid?: string;
	orchestrationStatus?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface CollectionType extends _CollectionType { constructor: { new(): CollectionType }; }

interface _CommonType extends BaseType {
	classMapmembers?: ClassMapmembersType;
	classMaps?: ClassMapsType;
	contacts?: ContactsType;
	hardwareCatalogitems?: HardwareCatalogitemsType;
	objectGroupkeyterms?: ObjectGroupkeytermsType;
	objectGroupmembers?: ObjectGroupmembersType;
	objectGroups?: ObjectGroupsType;
	parameterLists?: ParameterListsType;
	policies?: PoliciesType;
	policyKeyterms?: PolicyKeytermsType;
	policyMapmembers?: PolicyMapmembersType;
	profiles?: ProfilesType;
	relationshipRules?: RelationshipRulesType;
	vlanCharacteristics?: VlanCharacteristicsType;
}
interface CommonType extends _CommonType { constructor: { new(): CommonType }; }

interface _CommunicationServiceprofilesType extends BaseType {
	communicationServiceprofile?: CommunicationServiceprofileType[];
}
interface CommunicationServiceprofilesType extends _CommunicationServiceprofilesType { constructor: { new(): CommunicationServiceprofilesType }; }

interface _CommunicationServiceprofileType extends BaseType {
	coverageArealist?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	expDatarateDL?: number;
	expDatarateUL?: number;
	latency?: number;
	maxNumberofUEs?: number;
	profileId?: string;
	relationshipList?: RelationshipListType;
	resourceSharinglevel?: string;
	resourceVersion?: string;
	ueMobilitylevel?: string;
}
interface CommunicationServiceprofileType extends _CommunicationServiceprofileType { constructor: { new(): CommunicationServiceprofileType }; }

interface _CommunityListType extends BaseType {
	communityValue?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	type?: string;
}
interface CommunityListType extends _CommunityListType { constructor: { new(): CommunityListType }; }

interface _ComplexesType extends BaseType {
	complex?: ComplexType[];
}
interface ComplexesType extends _ComplexesType { constructor: { new(): ComplexesType }; }

interface _ComplexType extends BaseType {
	cables?: CablesType;
	city?: string;
	complexName?: string;
	country?: string;
	ctagPools?: CtagPoolsType;
	dataCentercode?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	elevation?: string;
	identityUrl?: string;
	lata?: string;
	latitude?: string;
	longitude?: string;
	physicalLocationid?: string;
	physicalLocationtype?: string;
	postalCode?: string;
	racks?: RacksType;
	region?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	state?: string;
	street1?: string;
	street2?: string;
	timeZone?: string;
}
interface ComplexType extends _ComplexType { constructor: { new(): ComplexType }; }

interface _ComposedResourcesType extends BaseType {
	composedResource?: ComposedResourceType[];
}
interface ComposedResourcesType extends _ComposedResourcesType { constructor: { new(): ComposedResourcesType }; }

interface _ComposedResourceType extends BaseType {
	accessClientid?: string;
	accessLtpid?: string;
	accessNodeid?: string;
	accessProviderid?: string;
	accessTopologyid?: string;
	composedResourcename?: string;
	cvlan?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	description?: string;
	id?: string;
	operationalStatus?: string;
	orchestrationStatus?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	role?: string;
	selflink?: string;
	type?: string;
	vpnName?: string;
}
interface ComposedResourceType extends _ComposedResourceType { constructor: { new(): ComposedResourceType }; }

interface _ConfigurationsType extends BaseType {
	configuration?: ConfigurationType[];
}
interface ConfigurationsType extends _ConfigurationsType { constructor: { new(): ConfigurationsType }; }

interface _ConfigurationType extends BaseType {
	configPolicyname?: string;
	configurationFunction?: string;
	configurationId?: string;
	configurationName?: string;
	configurationRole?: string;
	configurationSelflink?: string;
	configurationSubtype?: string;
	configurationType?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	evcs?: EvcsType;
	forwarderEvcs?: ForwarderEvcsType;
	managementOption?: string;
	metadata?: MetadataType;
	modelCustomizationid?: string;
	modelInvariantid?: string;
	modelVersionid?: string;
	operationalStatus?: string;
	orchestrationStatus?: string;
	orchestrationVersion?: string;
	primaryRole?: boolean;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	tunnelBandwidth?: string;
	vendorAllowedmaxbandwidth?: string;
}
interface ConfigurationType extends _ConfigurationType { constructor: { new(): ConfigurationType }; }

interface _ConnectivitiesType extends BaseType {
	connectivity?: ConnectivityType[];
}
interface ConnectivitiesType extends _ConnectivitiesType { constructor: { new(): ConnectivitiesType }; }

interface _ConnectivityType extends BaseType {
	accessClientid?: string;
	accessLtpid?: string;
	accessNodeid?: string;
	accessProviderid?: string;
	accessTopologyid?: string;
	adminStatus?: string;
	bandwidthProfilename?: string;
	cbs?: string;
	cir?: string;
	colorAware?: string;
	connectivityId?: string;
	connectivitySelflink?: string;
	couplingFlag?: string;
	cvlan?: string;
	ebs?: string;
	eir?: string;
	ethtSvcname?: string;
	modelCustomizationid?: string;
	modelInvariantid?: string;
	modelVersionid?: string;
	operationalStatus?: string;
	protectionType?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	sliceId?: string;
	vpnType?: string;
}
interface ConnectivityType extends _ConnectivityType { constructor: { new(): ConnectivityType }; }

interface _ConnectorsType extends BaseType {
	connector?: ConnectorType[];
}
interface ConnectorsType extends _ConnectorsType { constructor: { new(): ConnectorsType }; }

interface _ConnectorType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	metadata?: MetadataType;
	modelInvariantid?: string;
	modelVersionid?: string;
	relationshipList?: RelationshipListType;
	resourceInstanceid?: string;
	resourceVersion?: string;
	widgetModelid?: string;
	widgetModelversion?: string;
}
interface ConnectorType extends _ConnectorType { constructor: { new(): ConnectorType }; }

interface _ConstrainedElementsetsType extends BaseType {
	constrainedElementset?: ConstrainedElementsetType[];
}
interface ConstrainedElementsetsType extends _ConstrainedElementsetsType { constructor: { new(): ConstrainedElementsetsType }; }

interface _ConstrainedElementsetType extends BaseType {
	checkType?: string;
	constrainedElementsetuuid?: string;
	constraintType?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	elementChoicesets?: ElementChoicesetsType;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface ConstrainedElementsetType extends _ConstrainedElementsetType { constructor: { new(): ConstrainedElementsetType }; }

interface _ContactsType extends BaseType {
	contact?: ContactType[];
}
interface ContactsType extends _ContactsType { constructor: { new(): ContactsType }; }

interface _ContactType extends BaseType {
	contactEmail?: string;
	contactName?: string;
	contactTelephone?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	vendorType?: string;
}
interface ContactType extends _ContactType { constructor: { new(): ContactType }; }

interface _CpsType extends BaseType {
	cp?: CpType[];
}
interface CpsType extends _CpsType { constructor: { new(): CpsType }; }

interface _CpType extends BaseType {
	cpInstanceid?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	l3Interfaceipv4addresslist?: L3Interfaceipv4addresslistType[];
	l3Interfaceipv6addresslist?: L3Interfaceipv6addresslistType[];
	portId?: number;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface CpType extends _CpType { constructor: { new(): CpType }; }

interface _CtagAssignmentsType extends BaseType {
	ctagAssignment?: CtagAssignmentType[];
}
interface CtagAssignmentsType extends _CtagAssignmentsType { constructor: { new(): CtagAssignmentsType }; }

interface _CtagAssignmentType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	vlanIdinner?: number;
}
interface CtagAssignmentType extends _CtagAssignmentType { constructor: { new(): CtagAssignmentType }; }

interface _CtagPoolsType extends BaseType {
	ctagPool?: CtagPoolType[];
}
interface CtagPoolsType extends _CtagPoolsType { constructor: { new(): CtagPoolsType }; }

interface _CtagPoolType extends BaseType {
	availabilityZonename?: string;
	ctagPoolpurpose?: string;
	ctagValues?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	targetPe?: string;
}
interface CtagPoolType extends _CtagPoolType { constructor: { new(): CtagPoolType }; }

interface _CustomersType extends BaseType {
	customer?: CustomerType[];
}
interface CustomersType extends _CustomersType { constructor: { new(): CustomersType }; }

interface _CustomerType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	globalCustomerid?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	serviceSubscriptions?: ServiceSubscriptionsType;
	subscriberName?: string;
	subscriberType?: string;
}
interface CustomerType extends _CustomerType { constructor: { new(): CustomerType }; }

interface _CvlanTagentryType extends BaseType {
	cvlanTag?: number;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface CvlanTagentryType extends _CvlanTagentryType { constructor: { new(): CvlanTagentryType }; }

interface _CvlanTagsType extends BaseType {
	cvlanTagentry?: CvlanTagentryType[];
}
interface CvlanTagsType extends _CvlanTagsType { constructor: { new(): CvlanTagsType }; }

interface _DevicesType extends BaseType {
	device?: DeviceType[];
}
interface DevicesType extends _DevicesType { constructor: { new(): DevicesType }; }

interface _DeviceType extends BaseType {
	class?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	description?: string;
	deviceId?: string;
	deviceName?: string;
	esn?: string;
	modelCustomizationid?: string;
	modelInvariantid?: string;
	modelVersionid?: string;
	operationalStatus?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	selflink?: string;
	systemIp?: string;
	systemIpv4?: string;
	systemIpv6?: string;
	type?: string;
	vendor?: string;
	version?: string;
}
interface DeviceType extends _DeviceType { constructor: { new(): DeviceType }; }

interface _DhcpServicesType extends BaseType {
	dhcpService?: DhcpServiceType[];
}
interface DhcpServicesType extends _DhcpServicesType { constructor: { new(): DhcpServicesType }; }

interface _DhcpServiceType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	dhcpServiceid?: string;
	dhcpServicetype?: string;
	dns?: string;
	domainName?: string;
	leaseTime?: string;
	nbns?: string;
	ntpPrimary?: string;
	ntpSecondary?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	serverIpv4address?: string;
	serverIpv6address?: string;
	serviceEnable?: string;
}
interface DhcpServiceType extends _DhcpServiceType { constructor: { new(): DhcpServiceType }; }

interface _DvsSwitchesType extends BaseType {
	dvsSwitch?: DvsSwitchType[];
}
interface DvsSwitchesType extends _DvsSwitchesType { constructor: { new(): DvsSwitchesType }; }

interface _DvsSwitchType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	switchName?: string;
	vcenterUrl?: string;
}
interface DvsSwitchType extends _DvsSwitchType { constructor: { new(): DvsSwitchType }; }

interface _EdgePropnamesType extends BaseType {
	aaiUuid?: string;
	containsOtherv?: string;
	deleteOtherv?: string;
	direction?: string;
	edgeLabel?: string;
	multiplicityRule?: string;
	preventDelete?: string;
	SVCINFRA?: string;
}
interface EdgePropnamesType extends _EdgePropnamesType { constructor: { new(): EdgePropnamesType }; }

interface _EdgeTagqueryrequestType extends BaseType {
	edgeTag?: string;
	includeNodefilter?: IncludeNodefilterType[];
	resultDetail?: string;
	secondaryFilter?: SecondaryFilterType[];
	startNodefilter?: StartNodefilterType[];
	startNodetype?: string;
}
interface EdgeTagqueryrequestType extends _EdgeTagqueryrequestType { constructor: { new(): EdgeTagqueryrequestType }; }

interface _EdgeTagqueryresultType extends BaseType {
	taggedInventoryitemlist?: TaggedInventoryitemlistType[];
}
interface EdgeTagqueryresultType extends _EdgeTagqueryresultType { constructor: { new(): EdgeTagqueryresultType }; }

interface _ElementChoicesetsType extends BaseType {
	elementChoiceset?: ElementChoicesetType[];
}
interface ElementChoicesetsType extends _ElementChoicesetsType { constructor: { new(): ElementChoicesetsType }; }

interface _ElementChoicesetType extends BaseType {
	cardinality?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	elementChoicesetname?: string;
	elementChoicesetuuid?: string;
	modelElements?: ModelElementsType;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface ElementChoicesetType extends _ElementChoicesetType { constructor: { new(): ElementChoicesetType }; }

interface _EndpointsType extends BaseType {
	endpoint?: EndpointType[];
}
interface EndpointsType extends _EndpointsType { constructor: { new(): EndpointsType }; }

interface _EndpointType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	endpointId?: string;
	endpointName?: string;
	endpointName2?: string;
	endpointType?: string;
	ipAddresslist?: IpAddresslistType[];
	portList?: PortListType[];
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	selectorList?: SelectorListType[];
}
interface EndpointType extends _EndpointType { constructor: { new(): EndpointType }; }

interface _EntitlementsType extends BaseType {
	entitlement?: EntitlementType[];
}
interface EntitlementsType extends _EntitlementsType { constructor: { new(): EntitlementsType }; }

interface _EntitlementType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	groupUuid?: string;
	relationshipList?: RelationshipListType;
	resourceUuid?: string;
	resourceVersion?: string;
}
interface EntitlementType extends _EntitlementType { constructor: { new(): EntitlementType }; }

interface _EsisType extends BaseType {
	esi?: EsiType[];
}
interface EsisType extends _EsisType { constructor: { new(): EsisType }; }

interface _EsiType extends BaseType {
	activeOption?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	esiId?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface EsiType extends _EsiType { constructor: { new(): EsiType }; }

interface _EsrEmslistType extends BaseType {
	esrEms?: EsrEmsType[];
}
interface EsrEmslistType extends _EsrEmslistType { constructor: { new(): EsrEmslistType }; }

interface _EsrEmsType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	emsId?: string;
	esrSysteminfolist?: EsrSysteminfolistType;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface EsrEmsType extends _EsrEmsType { constructor: { new(): EsrEmsType }; }

interface _EsrNfvolistType extends BaseType {
	esrNfvo?: EsrNfvoType[];
}
interface EsrNfvolistType extends _EsrNfvolistType { constructor: { new(): EsrNfvolistType }; }

interface _EsrNfvoType extends BaseType {
	apiRoot?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	esrSysteminfolist?: EsrSysteminfolistType;
	nfvoId?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface EsrNfvoType extends _EsrNfvoType { constructor: { new(): EsrNfvoType }; }

interface _EsrSysteminfolistType extends BaseType {
	esrSysteminfo?: EsrSysteminfoType[];
}
interface EsrSysteminfolistType extends _EsrSysteminfolistType { constructor: { new(): EsrSysteminfolistType }; }

interface _EsrSysteminfoType extends BaseType {
	cloudDomain?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	defaultTenant?: string;
	esrSysteminfoid?: string;
	ipAddress?: string;
	openstackRegionid?: string;
	passive?: boolean;
	password?: string;
	port?: string;
	protocol?: string;
	relationshipList?: RelationshipListType;
	remotePath?: string;
	resourceVersion?: string;
	serviceUrl?: string;
	sslCacert?: string;
	sslInsecure?: boolean;
	systemName?: string;
	systemStatus?: string;
	systemType?: string;
	type?: string;
	userName?: string;
	vendor?: string;
	version?: string;
}
interface EsrSysteminfoType extends _EsrSysteminfoType { constructor: { new(): EsrSysteminfoType }; }

interface _EsrThirdpartysdnclistType extends BaseType {
	esrThirdpartysdnc?: EsrThirdpartysdncType[];
}
interface EsrThirdpartysdnclistType extends _EsrThirdpartysdnclistType { constructor: { new(): EsrThirdpartysdnclistType }; }

interface _EsrThirdpartysdncType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	domainType?: string;
	esrSysteminfolist?: EsrSysteminfolistType;
	location?: string;
	productName?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	thirdpartySdncid?: string;
}
interface EsrThirdpartysdncType extends _EsrThirdpartysdncType { constructor: { new(): EsrThirdpartysdncType }; }

interface _EsrVnfmlistType extends BaseType {
	esrVnfm?: EsrVnfmType[];
}
interface EsrVnfmlistType extends _EsrVnfmlistType { constructor: { new(): EsrVnfmlistType }; }

interface _EsrVnfmType extends BaseType {
	certificateUrl?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	esrSysteminfolist?: EsrSysteminfolistType;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	vimId?: string;
	vnfmId?: string;
}
interface EsrVnfmType extends _EsrVnfmType { constructor: { new(): EsrVnfmType }; }

interface _EvcsType extends BaseType {
	evc?: EvcType[];
}
interface EvcsType extends _EvcsType { constructor: { new(): EvcsType }; }

interface _EvcType extends BaseType {
	cirUnits?: string;
	cirValue?: string;
	cmtu?: number;
	collectorPopclli?: string;
	connectionDiversitygroupid?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	enhancedMulticast?: string;
	espEvccirunits?: string;
	espEvccirvalue?: string;
	espEvccircuitid?: string;
	espEvcpirunits?: string;
	espEvcpirvalue?: number;
	espItucode?: string;
	evcId?: string;
	evcPirunits?: string;
	evcPirvalue?: number;
	forwardingPathtopology?: string;
	interConnecttypeingress?: string;
	productEntryid?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	serviceHours?: string;
	tagmodeAccessegress?: string;
	tagmodeAccessingress?: string;
}
interface EvcType extends _EvcType { constructor: { new(): EvcType }; }

interface _ExtAainetworksType extends BaseType {
	extAainetwork?: ExtAainetworkType[];
}
interface ExtAainetworksType extends _ExtAainetworksType { constructor: { new(): ExtAainetworksType }; }

interface _ExtAainetworkType extends BaseType {
	aaiId?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	esrSysteminfo?: EsrSysteminfoType;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	schemaVersion?: string;
}
interface ExtAainetworkType extends _ExtAainetworkType { constructor: { new(): ExtAainetworkType }; }

interface _ExternalSystemType extends BaseType {
	esrEmslist?: EsrEmslistType;
	esrNfvolist?: EsrNfvolistType;
	esrThirdpartysdnclist?: EsrThirdpartysdnclistType;
	esrVnfmlist?: EsrVnfmlistType;
}
interface ExternalSystemType extends _ExternalSystemType { constructor: { new(): ExternalSystemType }; }

interface _ExtraPropertiesType extends BaseType {
	extraProperty?: ExtraPropertyType[];
}
interface ExtraPropertiesType extends _ExtraPropertiesType { constructor: { new(): ExtraPropertiesType }; }

interface _ExtraPropertyType extends BaseType {
	propertyName?: string;
	propertyValue?: string;
}
interface ExtraPropertyType extends _ExtraPropertyType { constructor: { new(): ExtraPropertyType }; }

interface _FlavorsType extends BaseType {
	flavor?: FlavorType[];
}
interface FlavorsType extends _FlavorsType { constructor: { new(): FlavorsType }; }

interface _FlavorType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	flavorDisabled?: boolean;
	flavorDisk?: number;
	flavorEphemeral?: number;
	flavorId?: string;
	flavorIspublic?: boolean;
	flavorName?: string;
	flavorRam?: number;
	flavorSelflink?: string;
	flavorSwap?: string;
	flavorVcpus?: number;
	hpaCapabilities?: HpaCapabilitiesType;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface FlavorType extends _FlavorType { constructor: { new(): FlavorType }; }

interface _ForwarderEvcsType extends BaseType {
	forwarderEvc?: ForwarderEvcType[];
}
interface ForwarderEvcsType extends _ForwarderEvcsType { constructor: { new(): ForwarderEvcsType }; }

interface _ForwarderEvcType extends BaseType {
	circuitId?: string;
	cvlan?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	forwarderEvcid?: string;
	ivlan?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	svlan?: string;
	vlanMappings?: VlanMappingsType;
}
interface ForwarderEvcType extends _ForwarderEvcType { constructor: { new(): ForwarderEvcType }; }

interface _ForwardersType extends BaseType {
	forwarder?: ForwarderType[];
}
interface ForwardersType extends _ForwardersType { constructor: { new(): ForwardersType }; }

interface _ForwarderType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	forwarderRole?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	sequence?: number;
}
interface ForwarderType extends _ForwarderType { constructor: { new(): ForwarderType }; }

interface _ForwardingPathsType extends BaseType {
	forwardingPath?: ForwardingPathType[];
}
interface ForwardingPathsType extends _ForwardingPathsType { constructor: { new(): ForwardingPathsType }; }

interface _ForwardingPathType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	forwarders?: ForwardersType;
	forwardingPathid?: string;
	forwardingPathname?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	selflink?: string;
}
interface ForwardingPathType extends _ForwardingPathType { constructor: { new(): ForwardingPathType }; }

interface _FqdnsType extends BaseType {
	fqdn?: FqdnType[];
}
interface FqdnsType extends _FqdnsType { constructor: { new(): FqdnsType }; }

interface _FqdnType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	dnsDomain?: string;
	fqdn?: string;
	fqdnFunction?: string;
	fqdnRole?: string;
	fqdnType?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface FqdnType extends _FqdnType { constructor: { new(): FqdnType }; }

interface _GenericVnfsType extends BaseType {
	genericVnf?: GenericVnfType[];
}
interface GenericVnfsType extends _GenericVnfsType { constructor: { new(): GenericVnfsType }; }

interface _GenericVnfType extends BaseType {
	applicationId?: string;
	asNumber?: string;
	bgpGroups?: BgpGroupsType;
	bgpNeighbors?: BgpNeighborsType;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	encryptedAccessflag?: boolean;
	entitlementAssignmentgroupuuid?: string;
	entitlementResourceuuid?: string;
	entitlements?: EntitlementsType;
	equipmentRole?: string;
	heatStackid?: string;
	inMaint?: boolean;
	ipv4Loopback0address?: string;
	ipv4Oamaddress?: string;
	ipv4Oamgatewayaddress?: string;
	ipv4Oamgatewayaddressprefixlength?: number;
	isClosedloopdisabled?: boolean;
	jobId?: string;
	lInterfaces?: LInterfacesType;
	lagInterfaces?: LagInterfacesType;
	licenseAssignmentgroupuuid?: string;
	licenseKey?: string;
	licenseKeyuuid?: string;
	licenses?: LicensesType;
	managementOption?: string;
	managementV6address?: string;
	modelCustomizationid?: string;
	modelInvariantid?: string;
	modelVersionid?: string;
	msoCatalogkey?: string;
	nfFunction?: string;
	nfNamingcode?: string;
	nfRole?: string;
	nfType?: string;
	nmLanv6address?: string;
	nmProfilename?: string;
	nnet?: number;
	nshd?: number;
	nvm?: number;
	operationalStatus?: string;
	orchestrationStatus?: string;
	personaModelversion?: string;
	provStatus?: string;
	regionalResourcesubzone?: string;
	regionalResourcezone?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	selflink?: string;
	serviceId?: string;
	softwareVersion?: string;
	summaryStatus?: string;
	vcpu?: number;
	vcpuUnits?: string;
	vdisk?: number;
	vdiskUnits?: string;
	vfModules?: VfModulesType;
	vlanIdouter?: number;
	vmemory?: number;
	vmemoryUnits?: string;
	vnfDiscriptorname?: string;
	vnfId?: string;
	vnfInstanceid?: string;
	vnfName?: string;
	vnfName2?: string;
	vnfPackagename?: string;
	vnfType?: string;
	widgetModelid?: string;
	widgetModelversion?: string;
}
interface GenericVnfType extends _GenericVnfType { constructor: { new(): GenericVnfType }; }

interface _GeoRegionsType extends BaseType {
	geoRegion?: GeoRegionType[];
}
interface GeoRegionsType extends _GeoRegionsType { constructor: { new(): GeoRegionsType }; }

interface _GeoRegionType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	geoRegionfunction?: string;
	geoRegionid?: string;
	geoRegionname?: string;
	geoRegionrole?: string;
	geoRegiontype?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface GeoRegionType extends _GeoRegionType { constructor: { new(): GeoRegionType }; }

interface _GigEtheroptionsType extends BaseType {
	gigEtheroption?: GigEtheroptionType[];
}
interface GigEtheroptionsType extends _GigEtheroptionsType { constructor: { new(): GigEtheroptionsType }; }

interface _GigEtheroptionType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	fec?: string;
	gigEtheroptionid?: string;
	lacpOnbundleid?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface GigEtheroptionType extends _GigEtheroptionType { constructor: { new(): GigEtheroptionType }; }

interface _GroupAssignmentsType extends BaseType {
	groupAssignment?: GroupAssignmentType[];
}
interface GroupAssignmentsType extends _GroupAssignmentsType { constructor: { new(): GroupAssignmentsType }; }

interface _GroupAssignmentType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	groupDescription?: string;
	groupId?: string;
	groupName?: string;
	groupType?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface GroupAssignmentType extends _GroupAssignmentType { constructor: { new(): GroupAssignmentType }; }

interface _HardwareCatalogitemsType extends BaseType {
	hardwareCatalogitem?: HardwareCatalogitemType[];
}
interface HardwareCatalogitemsType extends _HardwareCatalogitemsType { constructor: { new(): HardwareCatalogitemsType }; }

interface _HardwareCatalogitemType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	description?: string;
	itemName?: string;
	manufacturer?: string;
	model?: string;
	partNumber?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	sku?: string;
	systemType?: string;
}
interface HardwareCatalogitemType extends _HardwareCatalogitemType { constructor: { new(): HardwareCatalogitemType }; }

interface _HoldTimersType extends BaseType {
	holdTimer?: HoldTimerType[];
}
interface HoldTimersType extends _HoldTimersType { constructor: { new(): HoldTimersType }; }

interface _HoldTimerType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	down?: string;
	holdTimerid?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	up?: string;
}
interface HoldTimerType extends _HoldTimerType { constructor: { new(): HoldTimerType }; }

interface _HostAggregatesType extends BaseType {
	hostAggregate?: HostAggregateType[];
}
interface HostAggregatesType extends _HostAggregatesType { constructor: { new(): HostAggregatesType }; }

interface _HostAggregateType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	hostAggregateid?: string;
	hostAggregatename?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface HostAggregateType extends _HostAggregateType { constructor: { new(): HostAggregateType }; }

interface _HostRoutesType extends BaseType {
	hostRoute?: HostRouteType[];
}
interface HostRoutesType extends _HostRoutesType { constructor: { new(): HostRoutesType }; }

interface _HostRouteType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	hostRouteid?: string;
	metric?: number;
	nextHop?: string;
	nextHoptype?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	routePrefix?: string;
}
interface HostRouteType extends _HostRouteType { constructor: { new(): HostRouteType }; }

interface _HpaCapabilitiesType extends BaseType {
	hpaCapability?: HpaCapabilityType[];
}
interface HpaCapabilitiesType extends _HpaCapabilitiesType { constructor: { new(): HpaCapabilitiesType }; }

interface _HpaCapabilityType extends BaseType {
	architecture?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	hpaCapabilityid?: string;
	hpaFeature?: string;
	hpaFeatureattributes?: HpaFeatureattributesType[];
	hpaVersion?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface HpaCapabilityType extends _HpaCapabilityType { constructor: { new(): HpaCapabilityType }; }

interface _HpaCapacityType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	hpaCapacitykey?: string;
	hpaCapacityvalue?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface HpaCapacityType extends _HpaCapacityType { constructor: { new(): HpaCapacityType }; }

interface _HpaFeatureattributesType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	hpaAttributekey?: string;
	hpaAttributevalue?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface HpaFeatureattributesType extends _HpaFeatureattributesType { constructor: { new(): HpaFeatureattributesType }; }

interface _HwComponentsType extends BaseType {
	hwComponent?: HwComponentType[];
}
interface HwComponentsType extends _HwComponentsType { constructor: { new(): HwComponentsType }; }

interface _HwComponentType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	hwComponentfunction?: string;
	hwComponentid?: string;
	hwComponentname?: string;
	hwComponentrole?: string;
	hwComponenttype?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface HwComponentType extends _HwComponentType { constructor: { new(): HwComponentType }; }

interface _IcmpUnreachablesType extends BaseType {
	icmpUnreachable?: IcmpUnreachableType[];
}
interface IcmpUnreachablesType extends _IcmpUnreachablesType { constructor: { new(): IcmpUnreachablesType }; }

interface _IcmpUnreachableType extends BaseType {
	afIpv4?: string;
	afIpv6?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	icmpUnreachableid?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface IcmpUnreachableType extends _IcmpUnreachableType { constructor: { new(): IcmpUnreachableType }; }

interface _ImagesType extends BaseType {
	image?: ImageType[];
}
interface ImagesType extends _ImagesType { constructor: { new(): ImagesType }; }

interface _ImageType extends BaseType {
	application?: string;
	applicationVendor?: string;
	applicationVersion?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	imageArchitecture?: string;
	imageId?: string;
	imageName?: string;
	imageOsdistro?: string;
	imageOsversion?: string;
	imageSelflink?: string;
	metadata?: MetadataType;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface ImageType extends _ImageType { constructor: { new(): ImageType }; }

interface _IncludeNodefilterType extends BaseType {
	includeNodetype?: string;
}
interface IncludeNodefilterType extends _IncludeNodefilterType { constructor: { new(): IncludeNodefilterType }; }

interface _InstanceFiltersType extends BaseType {
	instanceFilter?: InstanceFilterType[];
}
interface InstanceFiltersType extends _InstanceFiltersType { constructor: { new(): InstanceFiltersType }; }

interface _InstanceFilterType extends BaseType {}
interface InstanceFilterType extends _InstanceFilterType { constructor: { new(): InstanceFilterType }; }

interface _InstanceGroupsType extends BaseType {
	instanceGroup?: InstanceGroupType[];
}
interface InstanceGroupsType extends _InstanceGroupsType { constructor: { new(): InstanceGroupsType }; }

interface _InstanceGroupType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	description?: string;
	id?: string;
	instanceGroupfunction?: string;
	instanceGroupname?: string;
	instanceGroupnumber?: number;
	instanceGrouprole?: string;
	instanceGrouptype?: string;
	modelInvariantid?: string;
	modelVersionid?: string;
	priorityNumber?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface InstanceGroupType extends _InstanceGroupType { constructor: { new(): InstanceGroupType }; }

interface _InterlayerAttachmentsType extends BaseType {
	interlayerAttachment?: InterlayerAttachmentType[];
}
interface InterlayerAttachmentsType extends _InterlayerAttachmentsType { constructor: { new(): InterlayerAttachmentsType }; }

interface _InterlayerAttachmentType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	id?: string;
	interLayerlockId?: number;
	modelCustomizationid?: string;
	modelInvariantid?: string;
	modelVersionid?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	selflink?: string;
}
interface InterlayerAttachmentType extends _InterlayerAttachmentType { constructor: { new(): InterlayerAttachmentType }; }

interface _InventoryItemdataType extends BaseType {
	propertyName?: string;
	propertyValue?: string;
}
interface InventoryItemdataType extends _InventoryItemdataType { constructor: { new(): InventoryItemdataType }; }

interface _InventoryItemType extends BaseType {
	inventoryItemdata?: InventoryItemdataType[];
	inventoryItemlink?: string;
	inventoryItemtype?: string;
	taggedInventoryitemlist?: TaggedInventoryitemlistType[];
}
interface InventoryItemType extends _InventoryItemType { constructor: { new(): InventoryItemType }; }

interface _InventoryResponseitemsType extends BaseType {
	inventoryResponseitem?: InventoryResponseitemType[];
}
interface InventoryResponseitemsType extends _InventoryResponseitemsType { constructor: { new(): InventoryResponseitemsType }; }

interface _InventoryResponseitemType extends BaseType {
	extraProperties?: ExtraPropertiesType;
	inventoryResponseitems?: InventoryResponseitemsType;
	modelName?: string;
}
interface InventoryResponseitemType extends _InventoryResponseitemType { constructor: { new(): InventoryResponseitemType }; }

interface _InventoryType extends BaseType {
	aaiInternal?: AaiInternalType;
	actions?: ActionsType;
	business?: BusinessType;
	cloudInfrastructure?: CloudInfrastructureType;
	common?: CommonType;
	externalSystem?: ExternalSystemType;
	network?: NetworkType;
	search?: SearchType;
	serviceDesignandcreation?: ServiceDesignandcreationType;
}
interface InventoryType extends _InventoryType { constructor: { new(): InventoryType }; }

interface _IpAddresslistType extends BaseType {
	assignment?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	ipAddress?: string;
	ipAddressend?: string;
	ipVersion?: string;
	length?: number;
	operator?: string;
	prefixGroup?: string;
	prefixSubgroup?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	type?: string;
}
interface IpAddresslistType extends _IpAddresslistType { constructor: { new(): IpAddresslistType }; }

interface _IpsecConfigurationsType extends BaseType {
	ipsecConfiguration?: IpsecConfigurationType[];
}
interface IpsecConfigurationsType extends _IpsecConfigurationsType { constructor: { new(): IpsecConfigurationsType }; }

interface _IpsecConfigurationType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	dpdFrequency?: string;
	dpdInterval?: string;
	ikeVersion?: string;
	ikev1Amgroupid?: string;
	ikev1Ampassword?: string;
	ikev1Authentication?: string;
	ikev1Dhgroup?: string;
	ikev1Encryption?: string;
	ikev1Salifetime?: string;
	ipsecAuthentication?: string;
	ipsecConfigurationid?: string;
	ipsecEncryption?: string;
	ipsecPfs?: string;
	ipsecSalifetime?: string;
	relationshipList?: RelationshipListType;
	requestedCustomername?: string;
	requestedDmztype?: string;
	requestedEncryptionstrength?: string;
	requestedVigaddresstype?: string;
	resourceVersion?: string;
	sharedDmznetworkaddress?: string;
	vigServers?: VigServersType;
	xauthUserpassword?: string;
	xauthUserid?: string;
}
interface IpsecConfigurationType extends _IpsecConfigurationType { constructor: { new(): IpsecConfigurationType }; }

interface _K8sResourcesType extends BaseType {
	k8sResource?: K8sResourceType[];
}
interface K8sResourcesType extends _K8sResourcesType { constructor: { new(): K8sResourcesType }; }

interface _K8sResourceType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	group?: string;
	id?: string;
	kind?: string;
	labels?: string[];
	name?: string;
	namespace?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	selflink?: string;
	version?: string;
}
interface K8sResourceType extends _K8sResourceType { constructor: { new(): K8sResourceType }; }

interface _KeyDataType extends BaseType {
	keyName?: string;
	keyValue?: string;
}
interface KeyDataType extends _KeyDataType { constructor: { new(): KeyDataType }; }

interface _L3Interfaceipv4addresslistType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	isFloating?: boolean;
	l3Interfaceipv4address?: string;
	l3Interfaceipv4prefixlength?: number;
	l3Interfaceipv4sriovaddress?: string;
	l3Interfaceipv4sriovprefixlength?: number;
	neutronNetworkid?: string;
	neutronSubnetid?: string;
	opsNote?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	vlanIdinner?: number;
	vlanIdouter?: number;
}
interface L3Interfaceipv4addresslistType extends _L3Interfaceipv4addresslistType { constructor: { new(): L3Interfaceipv4addresslistType }; }

interface _L3Interfaceipv6addresslistType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	isFloating?: boolean;
	l3Interfaceipv6address?: string;
	l3Interfaceipv6prefixlength?: number;
	l3Interfaceipv6sriovaddress?: string;
	l3Interfaceipv6sriovprefixlength?: number;
	neutronNetworkid?: string;
	neutronSubnetid?: string;
	opsNote?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	vlanIdinner?: number;
	vlanIdouter?: number;
}
interface L3Interfaceipv6addresslistType extends _L3Interfaceipv6addresslistType { constructor: { new(): L3Interfaceipv6addresslistType }; }

interface _L3NetworksType extends BaseType {
	l3Network?: L3NetworkType[];
}
interface L3NetworksType extends _L3NetworksType { constructor: { new(): L3NetworksType }; }

interface _L3NetworkType extends BaseType {
	aggregateRoutes?: AggregateRoutesType;
	contrailNetworkfqdn?: string;
	ctagAssignments?: CtagAssignmentsType;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	description?: string;
	heatStackid?: string;
	isBoundtovpn?: boolean;
	isExternalnetwork?: boolean;
	isProvidernetwork?: boolean;
	isSharednetwork?: boolean;
	isTrunked?: boolean;
	modelCustomizationid?: string;
	modelInvariantid?: string;
	modelVersionid?: string;
	msoCatalogkey?: string;
	networkFunction?: string;
	networkId?: string;
	networkName?: string;
	networkRole?: string;
	networkRoleinstance?: number;
	networkTechnology?: string;
	networkType?: string;
	neutronNetworkid?: string;
	operationalStatus?: string;
	opsNote?: string;
	orchestrationStatus?: string;
	personaModelversion?: string;
	physicalNetworkname?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	segmentationAssignments?: SegmentationAssignmentsType;
	selflink?: string;
	serviceId?: string;
	subnets?: SubnetsType;
	widgetModelid?: string;
	widgetModelversion?: string;
}
interface L3NetworkType extends _L3NetworkType { constructor: { new(): L3NetworkType }; }

interface _LabelRestrictionsType extends BaseType {
	labelRestriction?: LabelRestrictionType[];
}
interface LabelRestrictionsType extends _LabelRestrictionsType { constructor: { new(): LabelRestrictionsType }; }

interface _LabelRestrictionType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	id?: string;
	inclusiveExclusive?: string;
	labelEnd?: number;
	labelStart?: number;
	labelStep?: number;
	modelCustomizationid?: string;
	modelInvariantid?: string;
	modelVersionid?: string;
	operationalStatus?: string;
	priority?: number;
	rangeBitmap?: string;
	rangeType?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	selflink?: string;
	tribSlotgranularity?: string;
}
interface LabelRestrictionType extends _LabelRestrictionType { constructor: { new(): LabelRestrictionType }; }

interface _LacpsType extends BaseType {
	lacp?: LacpType[];
}
interface LacpsType extends _LacpsType { constructor: { new(): LacpsType }; }

interface _LacpType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	lacpId?: string;
	mode?: string;
	periodic?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	systemId?: string;
}
interface LacpType extends _LacpType { constructor: { new(): LacpType }; }

interface _LagInterfacesType extends BaseType {
	lagInterface?: LagInterfaceType[];
}
interface LagInterfacesType extends _LagInterfacesType { constructor: { new(): LagInterfacesType }; }

interface _LagInterfaceType extends BaseType {
	aggregatedEtheroptions?: AggregatedEtheroptionsType;
	dampening?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	encapsulation?: string;
	esis?: EsisType;
	flexibleVlantagging?: string;
	inMaint?: boolean;
	interfaceDescription?: string;
	interfaceFunction?: string;
	interfaceId?: string;
	interfaceName?: string;
	interfaceRole?: string;
	interfaceType?: string;
	lInterfaces?: LInterfacesType;
	l3Interfaceipv4addresslist?: L3Interfaceipv4addresslistType[];
	l3Interfaceipv6addresslist?: L3Interfaceipv6addresslistType[];
	lacpSystemid?: string;
	loadInterval?: string;
	loggingEvent?: string;
	minLinks?: number;
	mtu?: string;
	netflowEnabled?: boolean;
	opsNote?: string;
	provStatus?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	speedUnits?: string;
	speedValue?: string;
	temporaryParameterlists?: TemporaryParameterlistsType;
}
interface LagInterfaceType extends _LagInterfaceType { constructor: { new(): LagInterfaceType }; }

interface _LagLinksType extends BaseType {
	lagLink?: LagLinkType[];
}
interface LagLinksType extends _LagLinksType { constructor: { new(): LagLinksType }; }

interface _LagLinkType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	linkName?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface LagLinkType extends _LagLinkType { constructor: { new(): LagLinkType }; }

interface _LanPortconfigsType extends BaseType {
	lanPortconfig?: LanPortconfigType[];
}
interface LanPortconfigsType extends _LanPortconfigsType { constructor: { new(): LanPortconfigsType }; }

interface _LanPortconfigType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	description?: string;
	deviceId?: string;
	dhcpServices?: DhcpServicesType;
	inputBandwidth?: string;
	ipv4Address?: string;
	ipv6Address?: string;
	lanPortconfigid?: string;
	lanPortconfigname?: string;
	outputBandwidth?: string;
	portId?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	vlanTag?: string;
}
interface LanPortconfigType extends _LanPortconfigType { constructor: { new(): LanPortconfigType }; }

interface _LicensesType extends BaseType {
	license?: LicenseType[];
}
interface LicensesType extends _LicensesType { constructor: { new(): LicensesType }; }

interface _LicenseType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	groupUuid?: string;
	orderNumber?: string;
	projectNumber?: string;
	receiptDate?: string;
	relationshipList?: RelationshipListType;
	resourceUuid?: string;
	resourceVersion?: string;
}
interface LicenseType extends _LicenseType { constructor: { new(): LicenseType }; }

interface _LineOfbusinessType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	lineOfbusinessname?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface LineOfbusinessType extends _LineOfbusinessType { constructor: { new(): LineOfbusinessType }; }

interface _LinesOfbusinessType extends BaseType {
	lineOfbusiness?: LineOfbusinessType[];
}
interface LinesOfbusinessType extends _LinesOfbusinessType { constructor: { new(): LinesOfbusinessType }; }

interface _LInterfacesType extends BaseType {
	lInterface?: LInterfaceType[];
}
interface LInterfacesType extends _LInterfacesType { constructor: { new(): LInterfacesType }; }

interface _LInterfaceType extends BaseType {
	adminStatus?: string;
	allowedAddresspairs?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	encapsulation?: string;
	encapsulationTagrewrite?: string;
	icmpUnreachables?: IcmpUnreachablesType;
	inMaint?: boolean;
	interfaceDescription?: string;
	interfaceFunction?: string;
	interfaceId?: string;
	interfaceName?: string;
	interfaceRole?: string;
	interfaceType?: string;
	isIpunnumbered?: boolean;
	isPortmirrored?: boolean;
	lInterfaces?: LInterfacesType;
	l2Multicasting?: boolean;
	l3Interfaceipv4addresslist?: L3Interfaceipv4addresslistType[];
	l3Interfaceipv6addresslist?: L3Interfaceipv6addresslistType[];
	loadInterval?: string;
	macaddr?: string;
	managementOption?: string;
	mtu?: string;
	netflowEnabled?: boolean;
	networkName?: string;
	opsNote?: string;
	priority?: number;
	provStatus?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	selflink?: string;
	sriovVfs?: SriovVfsType;
	temporaryParameterlists?: TemporaryParameterlistsType;
	transportType?: string;
	v6Wanlinkip?: string;
	vlanIdstatementneeded?: string;
	vlans?: VlansType;
}
interface LInterfaceType extends _LInterfaceType { constructor: { new(): LInterfaceType }; }

interface _LogicalLinksType extends BaseType {
	logicalLink?: LogicalLinkType[];
}
interface LogicalLinksType extends _LogicalLinksType { constructor: { new(): LogicalLinksType }; }

interface _LogicalLinkType extends BaseType {
	adminState?: string;
	availableCapacity?: string;
	circuitId?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	inMaint?: boolean;
	ipVersion?: string;
	linkDescription?: string;
	linkFunction?: string;
	linkId?: string;
	linkName?: string;
	linkName2?: string;
	linkRole?: string;
	linkType?: string;
	modelInvariantid?: string;
	modelVersionid?: string;
	operationalStatus?: string;
	provStatus?: string;
	purpose?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	routingProtocol?: string;
	segmentId?: string;
	speedUnits?: string;
	speedValue?: string;
	widgetModelid?: string;
	widgetModelversion?: string;
}
interface LogicalLinkType extends _LogicalLinkType { constructor: { new(): LogicalLinkType }; }

interface _MappingsType extends BaseType {
	mapping?: MappingType[];
}
interface MappingsType extends _MappingsType { constructor: { new(): MappingsType }; }

interface _MappingType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	homedLocation?: string;
	location1?: string;
	location2?: string;
	mappingFunction?: string;
	mappingGroupid?: string;
	mappingId?: string;
	mappingName?: string;
	mappingNumber?: string;
	mappingRole?: string;
	mappingType?: string;
	plannedLocation?: string;
	provStatus?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface MappingType extends _MappingType { constructor: { new(): MappingType }; }

interface _MetadataType extends BaseType {
	metadatum?: MetadatumType[];
}
interface MetadataType extends _MetadataType { constructor: { new(): MetadataType }; }

interface _MetadatumType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	metaname?: string;
	metaval?: string;
	resourceVersion?: string;
}
interface MetadatumType extends _MetadatumType { constructor: { new(): MetadatumType }; }

interface _ModelAndnamedquerysearchType extends BaseType {
	instanceFilters?: InstanceFiltersType;
	queryParameters?: QueryParametersType;
	secondaryFiltercutpoint?: string;
	secondaryFilts?: SecondaryFiltsType;
	topNodetype?: string;
}
interface ModelAndnamedquerysearchType extends _ModelAndnamedquerysearchType { constructor: { new(): ModelAndnamedquerysearchType }; }

interface _ModelConstraintsType extends BaseType {
	modelConstraint?: ModelConstraintType[];
}
interface ModelConstraintsType extends _ModelConstraintsType { constructor: { new(): ModelConstraintsType }; }

interface _ModelConstraintType extends BaseType {
	constrainedElementsetuuidtoreplace?: string;
	constrainedElementsets?: ConstrainedElementsetsType;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	modelConstraintuuid?: string;
	resourceVersion?: string;
}
interface ModelConstraintType extends _ModelConstraintType { constructor: { new(): ModelConstraintType }; }

interface _ModelElementsType extends BaseType {
	modelElement?: ModelElementType[];
}
interface ModelElementsType extends _ModelElementsType { constructor: { new(): ModelElementsType }; }

interface _ModelElementType extends BaseType {
	cardinality?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	linkagePoints?: string[];
	modelConstraints?: ModelConstraintsType;
	modelElementuuid?: string;
	modelElements?: ModelElementsType;
	newDatadelflag?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface ModelElementType extends _ModelElementType { constructor: { new(): ModelElementType }; }

interface _ModelsType extends BaseType {
	model?: ModelType[];
}
interface ModelsType extends _ModelsType { constructor: { new(): ModelsType }; }

interface _ModelType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	modelInvariantid?: string;
	modelRole?: string;
	modelType?: string;
	modelVers?: ModelVersType;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface ModelType extends _ModelType { constructor: { new(): ModelType }; }

interface _ModelVersType extends BaseType {
	modelVer?: ModelVerType[];
}
interface ModelVersType extends _ModelVersType { constructor: { new(): ModelVersType }; }

interface _ModelVerType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	distributionStatus?: string;
	metadata?: MetadataType;
	modelDescription?: string;
	modelElements?: ModelElementsType;
	modelName?: string;
	modelVersion?: string;
	modelVersionid?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	sdncModelname?: string;
	sdncModelversion?: string;
}
interface ModelVerType extends _ModelVerType { constructor: { new(): ModelVerType }; }

interface _MulticastConfigurationsType extends BaseType {
	multicastConfiguration?: MulticastConfigurationType[];
}
interface MulticastConfigurationsType extends _MulticastConfigurationsType { constructor: { new(): MulticastConfigurationsType }; }

interface _MulticastConfigurationType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	multicastConfigurationid?: string;
	multicastProtocol?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	rpType?: string;
}
interface MulticastConfigurationType extends _MulticastConfigurationType { constructor: { new(): MulticastConfigurationType }; }

interface _NamedQueriesType extends BaseType {
	namedQuery?: NamedQueryType[];
}
interface NamedQueriesType extends _NamedQueriesType { constructor: { new(): NamedQueriesType }; }

interface _NamedQueryelementsType extends BaseType {
	namedQueryelement?: NamedQueryelementType[];
}
interface NamedQueryelementsType extends _NamedQueryelementsType { constructor: { new(): NamedQueryelementsType }; }

interface _NamedQueryelementType extends BaseType {
	doNotoutput?: string;
	namedQueryelementuuid?: string;
	namedQueryelements?: NamedQueryelementsType;
	propertyCollectlist?: string[];
	propertyConstraints?: PropertyConstraintsType;
	propertyLimitdesc?: string;
	relatedLookups?: RelatedLookupsType;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface NamedQueryelementType extends _NamedQueryelementType { constructor: { new(): NamedQueryelementType }; }

interface _NamedQueryType extends BaseType {
	description?: string;
	namedQueryelements?: NamedQueryelementsType;
	namedQueryname?: string;
	namedQueryuuid?: string;
	namedQueryversion?: string;
	relationshipList?: RelationshipListType;
	requiredInputparams?: NamedQueryTypeRequiredInputparamsType;
	resourceVersion?: string;
}
interface NamedQueryType extends _NamedQueryType { constructor: { new(): NamedQueryType }; }

interface _NamedQueryTypeRequiredInputparamsType extends BaseType {
	requiredInputparam?: string[];
}
interface NamedQueryTypeRequiredInputparamsType extends _NamedQueryTypeRequiredInputparamsType { constructor: { new(): NamedQueryTypeRequiredInputparamsType }; }

interface _NeighboursType extends BaseType {
	neighbour?: NeighbourType[];
}
interface NeighboursType extends _NeighboursType { constructor: { new(): NeighboursType }; }

interface _NeighbourType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	neighbourCellid?: string;
	neighbourCellname?: string;
	neighbourId?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	selflink?: string;
}
interface NeighbourType extends _NeighbourType { constructor: { new(): NeighbourType }; }

interface _NetworkPoliciesType extends BaseType {
	networkPolicy?: NetworkPolicyType[];
}
interface NetworkPoliciesType extends _NetworkPoliciesType { constructor: { new(): NetworkPoliciesType }; }

interface _NetworkPolicyType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	heatStackid?: string;
	jitter?: number;
	latency?: number;
	maxBandwidth?: number;
	name?: string;
	networkPolicyfqdn?: string;
	networkPolicyid?: string;
	relationshipList?: RelationshipListType;
	reliability?: number;
	resourceVersion?: string;
	type?: string;
}
interface NetworkPolicyType extends _NetworkPolicyType { constructor: { new(): NetworkPolicyType }; }

interface _NetworkProfilesType extends BaseType {
	networkProfile?: NetworkProfileType[];
}
interface NetworkProfilesType extends _NetworkProfilesType { constructor: { new(): NetworkProfilesType }; }

interface _NetworkProfileType extends BaseType {
	communityString?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	nmProfilename?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface NetworkProfileType extends _NetworkProfileType { constructor: { new(): NetworkProfileType }; }

interface _NetworkRangesType extends BaseType {
	networkRange?: NetworkRangeType[];
}
interface NetworkRangesType extends _NetworkRangesType { constructor: { new(): NetworkRangesType }; }

interface _NetworkRangeType extends BaseType {
	activities?: ActivitiesType;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	endRange?: string;
	lastAssigned?: string;
	networkRangefunction?: string;
	networkRangeid?: string;
	networkRangename?: string;
	networkRangerole?: string;
	networkRangetype?: string;
	rangeFormat?: string;
	rangePrefix?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	startRange?: string;
}
interface NetworkRangeType extends _NetworkRangeType { constructor: { new(): NetworkRangeType }; }

interface _NetworkResourcesType extends BaseType {
	networkResource?: NetworkResourceType[];
}
interface NetworkResourcesType extends _NetworkResourcesType { constructor: { new(): NetworkResourcesType }; }

interface _NetworkResourceType extends BaseType {
	clientId?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	networkId?: string;
	networkResourcetype?: string;
	providerId?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	selflink?: string;
	teTopoid?: string;
}
interface NetworkResourceType extends _NetworkResourceType { constructor: { new(): NetworkResourceType }; }

interface _NetworkRoutesType extends BaseType {
	networkRoute?: NetworkRouteType[];
}
interface NetworkRoutesType extends _NetworkRoutesType { constructor: { new(): NetworkRoutesType }; }

interface _NetworkRouteType extends BaseType {
	addressFamily?: string;
	configurationStatus?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	function?: string;
	ipAddress?: string;
	logicalInterfaceid?: string;
	metric?: number;
	nextHop?: string;
	nextHoptype?: string;
	prefixLength?: number;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	role?: string;
	routeId?: string;
	tag?: string;
	type?: string;
}
interface NetworkRouteType extends _NetworkRouteType { constructor: { new(): NetworkRouteType }; }

interface _NetworkTechnologiesType extends BaseType {
	networkTechnology?: NetworkTechnologyType[];
}
interface NetworkTechnologiesType extends _NetworkTechnologiesType { constructor: { new(): NetworkTechnologiesType }; }

interface _NetworkTechnologyType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	networkTechnologyid?: string;
	networkTechnologyname?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface NetworkTechnologyType extends _NetworkTechnologyType { constructor: { new(): NetworkTechnologyType }; }

interface _NetworkType extends BaseType {
	autonomousSystems?: AutonomousSystemsType;
	bfds?: BfdsType;
	cells?: CellsType;
	chassies?: ChassiesType;
	collections?: CollectionsType;
	configurations?: ConfigurationsType;
	connectivities?: ConnectivitiesType;
	devices?: DevicesType;
	extAainetworks?: ExtAainetworksType;
	forwardingPaths?: ForwardingPathsType;
	fqdns?: FqdnsType;
	genericVnfs?: GenericVnfsType;
	hwComponents?: HwComponentsType;
	instanceGroups?: InstanceGroupsType;
	interlayerAttachments?: InterlayerAttachmentsType;
	ipsecConfigurations?: IpsecConfigurationsType;
	l3Networks?: L3NetworksType;
	labelRestrictions?: LabelRestrictionsType;
	lagLinks?: LagLinksType;
	lanPortconfigs?: LanPortconfigsType;
	logicalLinks?: LogicalLinksType;
	mappings?: MappingsType;
	multicastConfigurations?: MulticastConfigurationsType;
	networkPolicies?: NetworkPoliciesType;
	networkRanges?: NetworkRangesType;
	networkResources?: NetworkResourcesType;
	networkRoutes?: NetworkRoutesType;
	newvces?: NewvcesType;
	nextHops?: NextHopsType;
	physicalLinks?: PhysicalLinksType;
	pnfs?: PnfsType;
	routeTablereferences?: RouteTablereferencesType;
	sdwanVpns?: SdwanVpnsType;
	sitePairsets?: SitePairsetsType;
	siteResources?: SiteResourcesType;
	swComponents?: SwComponentsType;
	teLinkattributes?: TeLinkattributesType;
	tunnelTerminationpoints?: TunnelTerminationpointsType;
	unis?: UnisType;
	vces?: VcesType;
	vnfcs?: VnfcsType;
	vplsPes?: VplsPesType;
	vpnBindings?: VpnBindingsType;
	wanPortconfigs?: WanPortconfigsType;
	zones?: ZonesType;
}
interface NetworkType extends _NetworkType { constructor: { new(): NetworkType }; }

interface _NewvcesType extends BaseType {
	newvce?: NewvceType[];
}
interface NewvcesType extends _NewvcesType { constructor: { new(): NewvcesType }; }

interface _NewvceType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	equipmentRole?: string;
	heatStackid?: string;
	ipv4Loopback0address?: string;
	ipv4Oamaddress?: string;
	lInterfaces?: LInterfacesType;
	licenseKey?: string;
	msoCatalogkey?: string;
	operationalStatus?: string;
	orchestrationStatus?: string;
	provStatus?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	vnfId2?: string;
	vnfName?: string;
	vnfName2?: string;
	vnfType?: string;
}
interface NewvceType extends _NewvceType { constructor: { new(): NewvceType }; }

interface _NextHopsType extends BaseType {
	nextHop?: NextHopType[];
}
interface NextHopsType extends _NextHopsType { constructor: { new(): NextHopsType }; }

interface _NextHopType extends BaseType {
	addressFamily?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	ipAddress?: string;
	metric?: number;
	nextHopfunction?: string;
	nextHopid?: string;
	nextHoprole?: string;
	nextHoptype?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	sequence?: number;
}
interface NextHopType extends _NextHopType { constructor: { new(): NextHopType }; }

interface _NosServersType extends BaseType {
	nosServer?: NosServerType[];
}
interface NosServersType extends _NosServersType { constructor: { new(): NosServersType }; }

interface _NosServerType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	inMaint?: boolean;
	nosServerid?: string;
	nosServername?: string;
	nosServerselflink?: string;
	provStatus?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	vendor?: string;
}
interface NosServerType extends _NosServerType { constructor: { new(): NosServerType }; }

interface _NotificationEventheaderType extends BaseType {
	action?: string;
	domain?: string;
	entityLink?: string;
	entityType?: string;
	eventType?: string;
	id?: string;
	sequenceNumber?: string;
	severity?: string;
	sourceName?: string;
	status?: string;
	timestamp?: string;
	topEntitytype?: string;
	version?: string;
}
interface NotificationEventheaderType extends _NotificationEventheaderType { constructor: { new(): NotificationEventheaderType }; }

interface _NotificationEventType extends BaseType {
	cambriapartition?: string;
	notificationEventheader?: NotificationEventheaderType;
}
interface NotificationEventType extends _NotificationEventType { constructor: { new(): NotificationEventType }; }

interface _NotifyType extends BaseType {
	eventId?: string;
	eventTrigger?: string;
	keyData?: KeyDataType[];
	nodeType?: string;
	selflink?: string;
}
interface NotifyType extends _NotifyType { constructor: { new(): NotifyType }; }

interface _OamNetworksType extends BaseType {
	oamNetwork?: OamNetworkType[];
}
interface OamNetworksType extends _OamNetworksType { constructor: { new(): OamNetworksType }; }

interface _OamNetworkType extends BaseType {
	cvlanTag?: number;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	ipv4Oamgatewayaddress?: string;
	ipv4Oamgatewayaddressprefixlength?: number;
	networkName?: string;
	networkUuid?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface OamNetworkType extends _OamNetworkType { constructor: { new(): OamNetworkType }; }

interface _ObjectGroupkeytermsType extends BaseType {
	objectGroupkeyterm?: ObjectGroupkeytermType[];
}
interface ObjectGroupkeytermsType extends _ObjectGroupkeytermsType { constructor: { new(): ObjectGroupkeytermsType }; }

interface _ObjectGroupkeytermType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	keyTermtype?: string;
	keyWord?: string;
	keyWordqualifier?: string;
	objectGroupkeytermid?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	sequenceNumber?: string;
}
interface ObjectGroupkeytermType extends _ObjectGroupkeytermType { constructor: { new(): ObjectGroupkeytermType }; }

interface _ObjectGroupmembersType extends BaseType {
	objectGroupmember?: ObjectGroupmemberType[];
}
interface ObjectGroupmembersType extends _ObjectGroupmembersType { constructor: { new(): ObjectGroupmembersType }; }

interface _ObjectGroupmemberType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	memberType?: string;
	objectGroupmemberid?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	sequenceNumber?: string;
}
interface ObjectGroupmemberType extends _ObjectGroupmemberType { constructor: { new(): ObjectGroupmemberType }; }

interface _ObjectGroupsType extends BaseType {
	objectGroup?: ObjectGroupType[];
}
interface ObjectGroupsType extends _ObjectGroupsType { constructor: { new(): ObjectGroupsType }; }

interface _ObjectGroupType extends BaseType {
	communityList?: CommunityListType[];
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	groupFunction?: string;
	groupName?: string;
	groupName2?: string;
	groupNumber?: string;
	groupRole?: string;
	groupType?: string;
	ipAddresslist?: IpAddresslistType[];
	objectGroupid?: string;
	portList?: PortListType[];
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	selectorList?: SelectorListType[];
	version?: string;
}
interface ObjectGroupType extends _ObjectGroupType { constructor: { new(): ObjectGroupType }; }

interface _OperationalEnvironmentsType extends BaseType {
	operationalEnvironment?: OperationalEnvironmentType[];
}
interface OperationalEnvironmentsType extends _OperationalEnvironmentsType { constructor: { new(): OperationalEnvironmentsType }; }

interface _OperationalEnvironmentType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	operationalEnvironmentid?: string;
	operationalEnvironmentname?: string;
	operationalEnvironmentstatus?: string;
	operationalEnvironmenttype?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	tenantContext?: string;
	workloadContext?: string;
}
interface OperationalEnvironmentType extends _OperationalEnvironmentType { constructor: { new(): OperationalEnvironmentType }; }

interface _OverloadedModelType extends BaseType {
	modelDescription?: string;
	modelId?: string;
	modelInvariantid?: string;
	modelName?: string;
	modelNameversionid?: string;
	modelType?: string;
	modelVers?: ModelVersType;
	modelVersion?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface OverloadedModelType extends _OverloadedModelType { constructor: { new(): OverloadedModelType }; }

interface _OwningEntitiesType extends BaseType {
	owningEntity?: OwningEntityType[];
}
interface OwningEntitiesType extends _OwningEntitiesType { constructor: { new(): OwningEntitiesType }; }

interface _OwningEntityType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	owningEntityid?: string;
	owningEntityname?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface OwningEntityType extends _OwningEntityType { constructor: { new(): OwningEntityType }; }

interface _ParameterListsType extends BaseType {
	parameterList?: ParameterListType[];
}
interface ParameterListsType extends _ParameterListsType { constructor: { new(): ParameterListsType }; }

interface _ParameterListType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	parameterFunction?: string;
	parameterListid?: string;
	parameterName?: string;
	parameterRole?: string;
	parameterType?: string;
	parameterValue?: string;
	parameterValueunit?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	sequenceNumber?: string;
}
interface ParameterListType extends _ParameterListType { constructor: { new(): ParameterListType }; }

interface _PdusType extends BaseType {
	pdu?: PduType[];
}
interface PdusType extends _PdusType { constructor: { new(): PdusType }; }

interface _PduType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	pduName?: string;
	pduType?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface PduType extends _PduType { constructor: { new(): PduType }; }

interface _PhysicalLinksType extends BaseType {
	physicalLink?: PhysicalLinkType[];
}
interface PhysicalLinksType extends _PhysicalLinksType { constructor: { new(): PhysicalLinksType }; }

interface _PhysicalLinkType extends BaseType {
	circuitId?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	dualMode?: string;
	linkDescription?: string;
	linkFunction?: string;
	linkName?: string;
	linkRole?: string;
	linkType?: string;
	managementOption?: string;
	operationalStatus?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	serviceProviderbandwidthdownunits?: string;
	serviceProviderbandwidthdownvalue?: number;
	serviceProviderbandwidthupunits?: string;
	serviceProviderbandwidthupvalue?: number;
	serviceProvidername?: string;
	speedUnits?: string;
	speedValue?: string;
}
interface PhysicalLinkType extends _PhysicalLinkType { constructor: { new(): PhysicalLinkType }; }

interface _PInterfacesType extends BaseType {
	pInterface?: PInterfaceType[];
}
interface PInterfacesType extends _PInterfacesType { constructor: { new(): PInterfacesType }; }

interface _PInterfaceType extends BaseType {
	activities?: ActivitiesType;
	adminState?: string;
	bandwidthAttributes?: BandwidthAttributesType;
	dampening?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	domainType?: string;
	encapsulation?: string;
	equipmentIdentifier?: string;
	gigEtheroptions?: GigEtheroptionsType;
	holdTimers?: HoldTimersType;
	inMaint?: boolean;
	interDomainplugid?: number;
	interfaceFunction?: string;
	interfaceName?: string;
	interfaceName2?: string;
	interfaceRole?: string;
	interfaceType?: string;
	invStatus?: string;
	lInterfaces?: LInterfacesType;
	l3Interfaceipv4addresslist?: L3Interfaceipv4addresslistType[];
	l3Interfaceipv6addresslist?: L3Interfaceipv6addresslistType[];
	lldp?: string;
	loadInterval?: string;
	macAddresss?: string;
	macaddr?: string;
	mtu?: string;
	netflowEnabled?: boolean;
	networkInterfacetype?: string;
	networkRef?: string;
	operationalStatus?: string;
	opsNote?: string;
	portDescription?: string;
	provStatus?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	selflink?: string;
	speedUnits?: string;
	speedValue?: string;
	sriovPfs?: SriovPfsType;
	temporaryParameterlists?: TemporaryParameterlistsType;
	transparent?: string;
}
interface PInterfaceType extends _PInterfaceType { constructor: { new(): PInterfaceType }; }

interface _PlatformsType extends BaseType {
	platform?: PlatformType[];
}
interface PlatformsType extends _PlatformsType { constructor: { new(): PlatformsType }; }

interface _PlatformType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	platformName?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface PlatformType extends _PlatformType { constructor: { new(): PlatformType }; }

interface _PluggableSlotsType extends BaseType {
	pluggableSlot?: PluggableSlotType[];
}
interface PluggableSlotsType extends _PluggableSlotsType { constructor: { new(): PluggableSlotsType }; }

interface _PluggableSlotType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	pluggables?: PluggablesType;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	slotName?: string;
}
interface PluggableSlotType extends _PluggableSlotType { constructor: { new(): PluggableSlotType }; }

interface _PluggablesType extends BaseType {
	pluggable?: PluggableType[];
}
interface PluggablesType extends _PluggablesType { constructor: { new(): PluggablesType }; }

interface _PluggableType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	equipIdentifier?: string;
	partNumber?: string;
	pluggableType?: string;
	ports?: PortsType;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface PluggableType extends _PluggableType { constructor: { new(): PluggableType }; }

interface _PnfsType extends BaseType {
	pnf?: PnfType[];
}
interface PnfsType extends _PnfsType { constructor: { new(): PnfsType }; }

interface _PnfType extends BaseType {
	activities?: ActivitiesType;
	adminStatus?: string;
	bgpGroups?: BgpGroupsType;
	bgpNeighbors?: BgpNeighborsType;
	commonBaseindicator?: string;
	configValidationrequestid?: string;
	configValidationstatus?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	equipModel?: string;
	equipType?: string;
	equipVendor?: string;
	equipmentClli?: string;
	frameId?: string;
	inMaint?: boolean;
	invStatus?: string;
	ipaddressV4aim?: string;
	ipaddressV4loopback0?: string;
	ipaddressV4oam?: string;
	ipaddressV6aim?: string;
	ipaddressV6loopback0?: string;
	ipaddressV6oam?: string;
	lInterfaces?: LInterfacesType;
	lagInterfaces?: LagInterfacesType;
	managementOption?: string;
	modelCustomizationid?: string;
	modelInvariantid?: string;
	modelVersionid?: string;
	networkOperatingsystem?: string;
	nfFunction?: string;
	nfNamingcode?: string;
	nfRole?: string;
	nfType?: string;
	operationalStatus?: string;
	opsNote?: string;
	orchestrationStatus?: string;
	pInterfaces?: PInterfacesType;
	phoneNumber?: string;
	pnfId?: string;
	pnfIpv4address?: string;
	pnfIpv6address?: string;
	pnfName?: string;
	pnfName2?: string;
	pnfName2source?: string;
	provStatus?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	selflink?: string;
	serialNumber?: string;
	softwareVersions?: SoftwareVersionsType;
	spareEquipmentindicator?: boolean;
	swVersion?: string;
	vrfs?: VrfsType;
}
interface PnfType extends _PnfType { constructor: { new(): PnfType }; }

interface _PoliciesType extends BaseType {
	policy?: PolicyType[];
}
interface PoliciesType extends _PoliciesType { constructor: { new(): PoliciesType }; }

interface _PolicyKeytermsType extends BaseType {
	policyKeyterm?: PolicyKeytermType[];
}
interface PolicyKeytermsType extends _PolicyKeytermsType { constructor: { new(): PolicyKeytermsType }; }

interface _PolicyKeytermType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	keyWord?: string;
	keyWordqualifier?: string;
	policyKeytermid?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	sequenceNumber?: string;
}
interface PolicyKeytermType extends _PolicyKeytermType { constructor: { new(): PolicyKeytermType }; }

interface _PolicyMapmembersType extends BaseType {
	policyMapmember?: PolicyMapmemberType[];
}
interface PolicyMapmembersType extends _PolicyMapmembersType { constructor: { new(): PolicyMapmembersType }; }

interface _PolicyMapmemberType extends BaseType {
	classType?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	memberType?: string;
	policyMapmemberid?: string;
	qosClassname?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	sequenceNumber?: string;
}
interface PolicyMapmemberType extends _PolicyMapmemberType { constructor: { new(): PolicyMapmemberType }; }

interface _PolicyType extends BaseType {
	applyOnforward?: boolean;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	direction?: string;
	doNottrack?: boolean;
	ipAddresslist?: IpAddresslistType[];
	namespace?: string;
	order?: number;
	policyDescription?: string;
	policyFunction?: string;
	policyId?: string;
	policyName?: string;
	policyRole?: string;
	policyType?: string;
	policyVariablename?: string;
	policyVariables?: string;
	preDnat?: boolean;
	relationshipList?: RelationshipListType;
	remoteAsn?: number;
	resourceVersion?: string;
	rules?: RulesType;
	selector?: string;
	selectorList?: SelectorListType[];
	status?: string;
	version?: string;
}
interface PolicyType extends _PolicyType { constructor: { new(): PolicyType }; }

interface _PortGroupsType extends BaseType {
	portGroup?: PortGroupType[];
}
interface PortGroupsType extends _PortGroupsType { constructor: { new(): PortGroupsType }; }

interface _PortGroupType extends BaseType {
	cvlanTags?: CvlanTagsType;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	heatStackid?: string;
	interfaceId?: string;
	interfaceRole?: string;
	msoCatalogkey?: string;
	neutronNetworkid?: string;
	neutronNetworkname?: string;
	orchestrationStatus?: string;
	portGroupid?: string;
	portGroupname?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	switchName?: string;
}
interface PortGroupType extends _PortGroupType { constructor: { new(): PortGroupType }; }

interface _PortListType extends BaseType {
	assignment?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	operator?: string;
	port?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	type?: string;
}
interface PortListType extends _PortListType { constructor: { new(): PortListType }; }

interface _PortsType extends BaseType {
	port?: PortType[];
}
interface PortsType extends _PortsType { constructor: { new(): PortsType }; }

interface _PortType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	equipIdentifier?: string;
	partNumber?: string;
	portEnd?: string;
	portName?: string;
	portRole?: string;
	portStart?: string;
	portType?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	speedUnits?: string;
	speedValue?: string;
	xcvrType?: string;
}
interface PortType extends _PortType { constructor: { new(): PortType }; }

interface _ProfilesType extends BaseType {
	profile?: ProfileType[];
}
interface ProfilesType extends _ProfilesType { constructor: { new(): ProfilesType }; }

interface _ProfileType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	metadata?: MetadataType;
	profileCharacteristics?: string;
	profileFunction?: string;
	profileName?: string;
	profileRole?: string;
	profileSelflink?: string;
	profileSubtype?: string;
	profileType?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface ProfileType extends _ProfileType { constructor: { new(): ProfileType }; }

interface _ProjectsType extends BaseType {
	project?: ProjectType[];
}
interface ProjectsType extends _ProjectsType { constructor: { new(): ProjectsType }; }

interface _ProjectType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	description?: string;
	projectName?: string;
	projectState?: string;
	projectType?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface ProjectType extends _ProjectType { constructor: { new(): ProjectType }; }

interface _PropertiesType extends BaseType {
	propertyName?: string;
	propertyValue?: string;
}
interface PropertiesType extends _PropertiesType { constructor: { new(): PropertiesType }; }

interface _PropertyConstraintsType extends BaseType {
	propertyConstraint?: PropertyConstraintType[];
}
interface PropertyConstraintsType extends _PropertyConstraintsType { constructor: { new(): PropertyConstraintsType }; }

interface _PropertyConstraintType extends BaseType {
	constraintType?: string;
	propertyConstraintuuid?: string;
	propertyName?: string;
	propertyValue?: string;
	resourceVersion?: string;
}
interface PropertyConstraintType extends _PropertyConstraintType { constructor: { new(): PropertyConstraintType }; }

interface _PserversType extends BaseType {
	pserver?: PserverType[];
}
interface PserversType extends _PserversType { constructor: { new(): PserversType }; }

interface _PserverType extends BaseType {
	activities?: ActivitiesType;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	diskIngigabytes?: number;
	equipModel?: string;
	equipType?: string;
	equipVendor?: string;
	fqdn?: string;
	function?: string;
	hostProfile?: string;
	hostname?: string;
	hpaCapacity?: HpaCapacityType[];
	inMaint?: boolean;
	internetTopology?: string;
	invStatus?: string;
	ipaddressV4aim?: string;
	ipaddressV4loopback0?: string;
	ipaddressV6aim?: string;
	ipaddressV6loopback0?: string;
	ipaddressV6oam?: string;
	ipv4Oamaddress?: string;
	lInterfaces?: LInterfacesType;
	lagInterfaces?: LagInterfacesType;
	managementOption?: string;
	numberOfcpus?: number;
	operationalStatus?: string;
	opsNote?: string;
	pInterfaces?: PInterfacesType;
	provStatus?: string;
	pserverId?: string;
	pserverName2?: string;
	pserverSelflink?: string;
	ptniiEquipname?: string;
	purpose?: string;
	ramInmegabytes?: number;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	role?: string;
	serialNumber?: string;
}
interface PserverType extends _PserverType { constructor: { new(): PserverType }; }

interface _QueryParametersType extends BaseType {
	namedQuery?: NamedQueryType;
	overloadedModel?: OverloadedModelType;
}
interface QueryParametersType extends _QueryParametersType { constructor: { new(): QueryParametersType }; }

interface _RacksType extends BaseType {
	rack?: RackType[];
}
interface RacksType extends _RacksType { constructor: { new(): RacksType }; }

interface _RackType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	pdus?: PdusType;
	rackLocation?: string;
	rackName?: string;
	rackPosition?: string;
	rackPowerdiversity?: boolean;
	rackType?: string;
	rackUnits?: RackUnitsType;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface RackType extends _RackType { constructor: { new(): RackType }; }

interface _RackUnitsType extends BaseType {
	rackUnit?: RackUnitType[];
}
interface RackUnitsType extends _RackUnitsType { constructor: { new(): RackUnitsType }; }

interface _RackUnitType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	rackUnitname?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface RackUnitType extends _RackUnitType { constructor: { new(): RackUnitType }; }

interface _RelatedLookupsType extends BaseType {
	relatedLookup?: RelatedLookupType[];
}
interface RelatedLookupsType extends _RelatedLookupsType { constructor: { new(): RelatedLookupsType }; }

interface _RelatedLookupType extends BaseType {
	propertyCollectlist?: string[];
	relatedLookupuuid?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	sourceNodeproperty?: string;
	sourceNodetype?: string;
	targetNodeproperty?: string;
	targetNodetype?: string;
}
interface RelatedLookupType extends _RelatedLookupType { constructor: { new(): RelatedLookupType }; }

interface _RelatedTopropertyType extends BaseType {
	propertyKey?: string;
	propertyValue?: string;
}
interface RelatedTopropertyType extends _RelatedTopropertyType { constructor: { new(): RelatedTopropertyType }; }

interface _RelationshipComponentsType extends BaseType {
	relationshipComponent?: RelationshipComponentType[];
}
interface RelationshipComponentsType extends _RelationshipComponentsType { constructor: { new(): RelationshipComponentsType }; }

interface _RelationshipComponentType extends BaseType {
	componentOrder?: number;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	ruleNode?: string;
	ruleProperty?: string;
	ruleValue?: string;
}
interface RelationshipComponentType extends _RelationshipComponentType { constructor: { new(): RelationshipComponentType }; }

interface _RelationshipDataType extends BaseType {
	relationshipKey?: string;
	relationshipValue?: string;
}
interface RelationshipDataType extends _RelationshipDataType { constructor: { new(): RelationshipDataType }; }

interface _RelationshipListType extends BaseType {
	relationship?: RelationshipType[];
}
interface RelationshipListType extends _RelationshipListType { constructor: { new(): RelationshipListType }; }

interface _RelationshipPropertiesType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
}
interface RelationshipPropertiesType extends _RelationshipPropertiesType { constructor: { new(): RelationshipPropertiesType }; }

interface _RelationshipRulesType extends BaseType {
	relationshipRule?: RelationshipRuleType[];
}
interface RelationshipRulesType extends _RelationshipRulesType { constructor: { new(): RelationshipRulesType }; }

interface _RelationshipRuleType extends BaseType {
	appliesTo?: string;
	context?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	relationshipComponents?: RelationshipComponentsType;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	ruleId?: string;
	ruleTraversals?: number;
}
interface RelationshipRuleType extends _RelationshipRuleType { constructor: { new(): RelationshipRuleType }; }

interface _RelationshipType extends BaseType {
	relatedLink?: string;
	relatedTo?: string;
	relatedToproperty?: RelatedTopropertyType[];
	relationshipData?: RelationshipDataType[];
	relationshipLabel?: string;
	relationshipProperties?: RelationshipPropertiesType;
}
interface RelationshipType extends _RelationshipType { constructor: { new(): RelationshipType }; }

interface _ReservedPropnamesType extends BaseType {
	aaiCreatedts?: number;
	aaiLastmodts?: number;
	aaiNodetype?: string;
	aaiUniquekey?: string;
	aaiUri?: string;
	lastModsourceoftruth?: string;
	sourceOftruth?: string;
}
interface ReservedPropnamesType extends _ReservedPropnamesType { constructor: { new(): ReservedPropnamesType }; }

interface _ResponseListType extends BaseType {
	inventoryResponseitems?: InventoryResponseitemsType;
}
interface ResponseListType extends _ResponseListType { constructor: { new(): ResponseListType }; }

interface _ResultDataType extends BaseType {
	resourceLink?: string;
	resourceType?: string;
}
interface ResultDataType extends _ResultDataType { constructor: { new(): ResultDataType }; }

interface _RouteTablereferencesType extends BaseType {
	routeTablereference?: RouteTablereferenceType[];
}
interface RouteTablereferencesType extends _RouteTablereferencesType { constructor: { new(): RouteTablereferencesType }; }

interface _RouteTablereferenceType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	routeTablereferencefqdn?: string;
	routeTablereferenceid?: string;
}
interface RouteTablereferenceType extends _RouteTablereferenceType { constructor: { new(): RouteTablereferenceType }; }

interface _RouteTargetsType extends BaseType {
	routeTarget?: RouteTargetType[];
}
interface RouteTargetsType extends _RouteTargetsType { constructor: { new(): RouteTargetsType }; }

interface _RouteTargetType extends BaseType {
	configurationStatus?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	globalRoutetarget?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	routeTargetfunction?: string;
	routeTargetrole?: string;
	routeTargettype?: string;
}
interface RouteTargetType extends _RouteTargetType { constructor: { new(): RouteTargetType }; }

interface _RoutingInstancesType extends BaseType {
	routingInstance?: RoutingInstanceType[];
}
interface RoutingInstancesType extends _RoutingInstancesType { constructor: { new(): RoutingInstancesType }; }

interface _RoutingInstanceType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	routingInstanceid?: string;
	rpmOwner?: string;
	sitePairs?: SitePairsType;
}
interface RoutingInstanceType extends _RoutingInstanceType { constructor: { new(): RoutingInstanceType }; }

interface _RulesType extends BaseType {
	rule?: RuleType[];
}
interface RulesType extends _RulesType { constructor: { new(): RulesType }; }

interface _RuleType extends BaseType {
	action?: string;
	countVariable?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	description?: string;
	direction?: string;
	icmp?: string[];
	ipAddresslist?: IpAddresslistType[];
	log?: boolean;
	metadata?: MetadataType;
	notIcmp?: string[];
	notProtocol?: string;
	portList?: PortListType[];
	protocol?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	ruleId?: string;
	selectorList?: SelectorListType[];
	sequence?: number;
	status?: string;
	threshold?: number;
	version?: string;
}
interface RuleType extends _RuleType { constructor: { new(): RuleType }; }

interface _SdnZoneresponseType extends BaseType {
	azAnddvsswitches?: AzAnddvsswitchesType[];
	oamNetworks?: OamNetworksType;
}
interface SdnZoneresponseType extends _SdnZoneresponseType { constructor: { new(): SdnZoneresponseType }; }

interface _SdwanVpnsType extends BaseType {
	sdwanVpn?: SdwanVpnType[];
}
interface SdwanVpnsType extends _SdwanVpnsType { constructor: { new(): SdwanVpnsType }; }

interface _SdwanVpnType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	modelCustomizationid?: string;
	modelInvariantid?: string;
	modelVersionid?: string;
	operationalStatus?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	sdwanVpnid?: string;
	sdwanVpnname?: string;
	selflink?: string;
	tenantId?: string;
	topology?: string;
	vpnId?: string;
	vxlanId?: string;
}
interface SdwanVpnType extends _SdwanVpnType { constructor: { new(): SdwanVpnType }; }

interface _SearchResultsType extends BaseType {
	resultData?: ResultDataType[];
}
interface SearchResultsType extends _SearchResultsType { constructor: { new(): SearchResultsType }; }

interface _SearchType extends BaseType {
	edgeTagqueryrequest?: EdgeTagqueryrequestType;
	edgeTagqueryresult?: EdgeTagqueryresultType;
	sdnZoneresponse?: SdnZoneresponseType;
	searchResults?: SearchResultsType;
}
interface SearchType extends _SearchType { constructor: { new(): SearchType }; }

interface _SecondaryFilterType extends BaseType {
	filterType?: string;
	propertyName?: string;
	propertyValue?: string;
}
interface SecondaryFilterType extends _SecondaryFilterType { constructor: { new(): SecondaryFilterType }; }

interface _SecondaryFiltsType extends BaseType {
	secondaryFilt?: SecondaryFiltType[];
}
interface SecondaryFiltsType extends _SecondaryFiltsType { constructor: { new(): SecondaryFiltsType }; }

interface _SecondaryFiltType extends BaseType {}
interface SecondaryFiltType extends _SecondaryFiltType { constructor: { new(): SecondaryFiltType }; }

interface _SegmentationAssignmentsType extends BaseType {
	segmentationAssignment?: SegmentationAssignmentType[];
}
interface SegmentationAssignmentsType extends _SegmentationAssignmentsType { constructor: { new(): SegmentationAssignmentsType }; }

interface _SegmentationAssignmentType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	segmentationId?: string;
}
interface SegmentationAssignmentType extends _SegmentationAssignmentType { constructor: { new(): SegmentationAssignmentType }; }

interface _SelectorListType extends BaseType {
	assignment?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	selector?: string;
	type?: string;
}
interface SelectorListType extends _SelectorListType { constructor: { new(): SelectorListType }; }

interface _ServiceCapabilitiesType extends BaseType {
	serviceCapability?: ServiceCapabilityType[];
}
interface ServiceCapabilitiesType extends _ServiceCapabilitiesType { constructor: { new(): ServiceCapabilitiesType }; }

interface _ServiceCapabilityType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	serviceType?: string;
	vnfType?: string;
}
interface ServiceCapabilityType extends _ServiceCapabilityType { constructor: { new(): ServiceCapabilityType }; }

interface _ServiceDesignandcreationType extends BaseType {
	models?: ModelsType;
	namedQueries?: NamedQueriesType;
	serviceCapabilities?: ServiceCapabilitiesType;
	services?: ServicesType;
	vnfImages?: VnfImagesType;
}
interface ServiceDesignandcreationType extends _ServiceDesignandcreationType { constructor: { new(): ServiceDesignandcreationType }; }

interface _ServiceInstancesType extends BaseType {
	serviceInstance?: ServiceInstanceType[];
}
interface ServiceInstancesType extends _ServiceInstancesType { constructor: { new(): ServiceInstancesType }; }

interface _ServiceInstanceType extends BaseType {
	allottedResources?: AllottedResourcesType;
	bandwidthDownwan1?: string;
	bandwidthDownwan2?: string;
	bandwidthTotal?: string;
	bandwidthUpwan1?: string;
	bandwidthUpwan2?: string;
	communicationServiceprofiles?: CommunicationServiceprofilesType;
	composedResources?: ComposedResourcesType;
	createdAt?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	description?: string;
	dueDate?: string;
	endDate?: string;
	environmentContext?: string;
	inputParameters?: string;
	metadata?: MetadataType;
	modelInvariantid?: string;
	modelVersionid?: string;
	operationalStatus?: string;
	orchestrationStatus?: string;
	personaModelversion?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	selflink?: string;
	serviceFunction?: string;
	serviceInstanceid?: string;
	serviceInstancelocationid?: string;
	serviceInstancename?: string;
	serviceLayer?: string;
	serviceProfiles?: ServiceProfilesType;
	serviceRate?: string;
	serviceRole?: string;
	serviceType?: string;
	sliceProfiles?: SliceProfilesType;
	updatedAt?: string;
	vhnPortalurl?: string;
	widgetModelid?: string;
	widgetModelversion?: string;
	workloadContext?: string;
}
interface ServiceInstanceType extends _ServiceInstanceType { constructor: { new(): ServiceInstanceType }; }

interface _ServiceProfilesType extends BaseType {
	serviceProfile?: ServiceProfileType[];
}
interface ServiceProfilesType extends _ServiceProfilesType { constructor: { new(): ServiceProfilesType }; }

interface _ServiceProfileType extends BaseType {
	activityFactor?: number;
	availability?: number;
	coverageAreaTAlist?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	dlThptperslice?: number;
	dlThptperUE?: number;
	jitter?: number;
	latency?: number;
	maxNumberofconns?: number;
	maxNumberofUEs?: number;
	maxPktsize?: number;
	profileId?: string;
	relationshipList?: RelationshipListType;
	reliability?: string;
	resourceSharinglevel?: string;
	resourceVersion?: string;
	survivalTime?: string;
	termDensity?: number;
	ueMobilitylevel?: string;
	ulThptperslice?: number;
	ulThptperUE?: number;
}
interface ServiceProfileType extends _ServiceProfileType { constructor: { new(): ServiceProfileType }; }

interface _ServicesType extends BaseType {
	service?: ServiceType[];
}
interface ServicesType extends _ServicesType { constructor: { new(): ServicesType }; }

interface _ServiceSubscriptionsType extends BaseType {
	serviceSubscription?: ServiceSubscriptionType[];
}
interface ServiceSubscriptionsType extends _ServiceSubscriptionsType { constructor: { new(): ServiceSubscriptionsType }; }

interface _ServiceSubscriptionType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	serviceInstances?: ServiceInstancesType;
	serviceType?: string;
	tempUbsubaccountid?: string;
}
interface ServiceSubscriptionType extends _ServiceSubscriptionType { constructor: { new(): ServiceSubscriptionType }; }

interface _ServiceType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	serviceDescription?: string;
	serviceId?: string;
	serviceSelflink?: string;
	serviceVersion?: string;
}
interface ServiceType extends _ServiceType { constructor: { new(): ServiceType }; }

interface _SitePairsetsType extends BaseType {
	sitePairset?: SitePairsetType[];
}
interface SitePairsetsType extends _SitePairsetsType { constructor: { new(): SitePairsetsType }; }

interface _SitePairsetType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	routingInstances?: RoutingInstancesType;
	sitePairsetid?: string;
}
interface SitePairsetType extends _SitePairsetType { constructor: { new(): SitePairsetType }; }

interface _SitePairsType extends BaseType {
	sitePair?: SitePairType[];
}
interface SitePairsType extends _SitePairsType { constructor: { new(): SitePairsType }; }

interface _SitePairType extends BaseType {
	classesOfservice?: ClassesOfserviceType;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	destinationEquiptype?: string;
	destinationHostname?: string;
	destinationIp?: string;
	ipVersion?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	sitePairid?: string;
	sourceIp?: string;
}
interface SitePairType extends _SitePairType { constructor: { new(): SitePairType }; }

interface _SiteResourcesType extends BaseType {
	siteResource?: SiteResourceType[];
}
interface SiteResourcesType extends _SiteResourcesType { constructor: { new(): SiteResourcesType }; }

interface _SiteResourceType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	description?: string;
	generatedSiteid?: string;
	modelCustomizationid?: string;
	modelInvariantid?: string;
	modelVersionid?: string;
	operationalStatus?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	role?: string;
	selflink?: string;
	siteResourceid?: string;
	siteResourcename?: string;
	type?: string;
}
interface SiteResourceType extends _SiteResourceType { constructor: { new(): SiteResourceType }; }

interface _SliceProfilesType extends BaseType {
	sliceProfile?: SliceProfileType[];
}
interface SliceProfilesType extends _SliceProfilesType { constructor: { new(): SliceProfilesType }; }

interface _SliceProfileType extends BaseType {
	activityFactor?: number;
	areaTrafficcapDL?: number;
	areaTrafficcapUL?: number;
	coverageAreaTAlist?: string;
	csAvailabilitytarget?: number;
	csReliabilitymeantime?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	expDatarate?: number;
	expDatarateDL?: number;
	expDatarateUL?: number;
	jitter?: number;
	latency?: number;
	maxBandwidth?: number;
	maxNumberofPDUsession?: number;
	maxNumberofUEs?: number;
	msgSizebyte?: string;
	overallUserdensity?: number;
	profileId?: string;
	relationshipList?: RelationshipListType;
	resourceSharinglevel?: string;
	resourceVersion?: string;
	survivalTime?: string;
	transferIntervaltarget?: string;
	ueMobilitylevel?: string;
}
interface SliceProfileType extends _SliceProfileType { constructor: { new(): SliceProfileType }; }

interface _SnapshotsType extends BaseType {
	snapshot?: SnapshotType[];
}
interface SnapshotsType extends _SnapshotsType { constructor: { new(): SnapshotsType }; }

interface _SnapshotType extends BaseType {
	application?: string;
	applicationVendor?: string;
	applicationVersion?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	prevSnapshotid?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	snapshotArchitecture?: string;
	snapshotId?: string;
	snapshotName?: string;
	snapshotOsdistro?: string;
	snapshotOsversion?: string;
	snapshotSelflink?: string;
}
interface SnapshotType extends _SnapshotType { constructor: { new(): SnapshotType }; }

interface _SoftwareVersionsType extends BaseType {
	softwareVersion?: SoftwareVersionType[];
}
interface SoftwareVersionsType extends _SoftwareVersionsType { constructor: { new(): SoftwareVersionsType }; }

interface _SoftwareVersionType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	isActiveswver?: boolean;
	softwareVersionid?: string;
}
interface SoftwareVersionType extends _SoftwareVersionType { constructor: { new(): SoftwareVersionType }; }

interface _SpPartnersType extends BaseType {
	spPartner?: SpPartnerType[];
}
interface SpPartnersType extends _SpPartnersType { constructor: { new(): SpPartnersType }; }

interface _SpPartnerType extends BaseType {
	callsource?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	modelCustomizationid?: string;
	modelInvariantid?: string;
	modelVersionid?: string;
	operationalStatus?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	spPartnerid?: string;
	url?: string;
}
interface SpPartnerType extends _SpPartnerType { constructor: { new(): SpPartnerType }; }

interface _SriovPfsType extends BaseType {
	sriovPf?: SriovPfType[];
}
interface SriovPfsType extends _SriovPfsType { constructor: { new(): SriovPfsType }; }

interface _SriovPfType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	pfPciid?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface SriovPfType extends _SriovPfType { constructor: { new(): SriovPfType }; }

interface _SriovVfsType extends BaseType {
	sriovVf?: SriovVfType[];
}
interface SriovVfsType extends _SriovVfsType { constructor: { new(): SriovVfsType }; }

interface _SriovVfType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	neutronNetworkid?: string;
	pciId?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	vfBroadcastallow?: boolean;
	vfInsertstag?: boolean;
	vfLinkstatus?: string;
	vfMacantispoofcheck?: boolean;
	vfMacfilter?: string;
	vfMirrors?: string;
	vfUnknownmulticastallow?: boolean;
	vfUnknownunicastallow?: boolean;
	vfVlanantispoofcheck?: boolean;
	vfVlanfilter?: string;
	vfVlanstrip?: boolean;
}
interface SriovVfType extends _SriovVfType { constructor: { new(): SriovVfType }; }

interface _StartNodefilterType extends BaseType {
	propertyName?: string;
	propertyValue?: string;
}
interface StartNodefilterType extends _StartNodefilterType { constructor: { new(): StartNodefilterType }; }

interface _SubnetsType extends BaseType {
	subnet?: SubnetType[];
}
interface SubnetsType extends _SubnetsType { constructor: { new(): SubnetsType }; }

interface _SubnetType extends BaseType {
	bgpNeighbors?: BgpNeighborsType;
	cidrMask?: string;
	configurationStatus?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	description?: string;
	dhcpEnabled?: boolean;
	dhcpEnd?: string;
	dhcpStart?: string;
	gatewayAddress?: string;
	hostRoutes?: HostRoutesType;
	ipAddresslist?: IpAddresslistType[];
	ipAssignmentdirection?: string;
	ipVersion?: string;
	networkStartaddress?: string;
	neutronSubnetid?: string;
	opsNote?: string;
	orchestrationStatus?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	subnetFunction?: string;
	subnetId?: string;
	subnetModel?: string;
	subnetName?: string;
	subnetRole?: string;
	subnetSequence?: number;
	subnetType?: string;
}
interface SubnetType extends _SubnetType { constructor: { new(): SubnetType }; }

interface _SwComponentsType extends BaseType {
	swComponent?: SwComponentType[];
}
interface SwComponentsType extends _SwComponentsType { constructor: { new(): SwComponentsType }; }

interface _SwComponentType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	swComponentfunction?: string;
	swComponentid?: string;
	swComponentname?: string;
	swComponentrole?: string;
	swComponenttype?: string;
}
interface SwComponentType extends _SwComponentType { constructor: { new(): SwComponentType }; }

interface _TaggedInventoryitemlistType extends BaseType {
	inventoryItem?: InventoryItemType[];
}
interface TaggedInventoryitemlistType extends _TaggedInventoryitemlistType { constructor: { new(): TaggedInventoryitemlistType }; }

interface _TeLinkattributesType extends BaseType {
	teLinkattribute?: TeLinkattributeType[];
}
interface TeLinkattributesType extends _TeLinkattributesType { constructor: { new(): TeLinkattributesType }; }

interface _TeLinkattributeType extends BaseType {
	accessType?: string;
	availableBandwidth?: number;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	id?: string;
	isAbstract?: boolean;
	linkProtectiontype?: string;
	modelCustomizationid?: string;
	modelInvariantid?: string;
	modelVersionid?: string;
	number?: number;
	oduType?: string;
	operationalStatus?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	selflink?: string;
}
interface TeLinkattributeType extends _TeLinkattributeType { constructor: { new(): TeLinkattributeType }; }

interface _TemporaryParameterlistsType extends BaseType {
	temporaryParameterlist?: TemporaryParameterlistType[];
}
interface TemporaryParameterlistsType extends _TemporaryParameterlistsType { constructor: { new(): TemporaryParameterlistsType }; }

interface _TemporaryParameterlistType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	paramGroup?: string;
	paramName?: string;
	paramValue?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	temporaryParameterlistid?: string;
}
interface TemporaryParameterlistType extends _TemporaryParameterlistType { constructor: { new(): TemporaryParameterlistType }; }

interface _TenantsType extends BaseType {
	tenant?: TenantType[];
}
interface TenantsType extends _TenantsType { constructor: { new(): TenantsType }; }

interface _TenantType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	k8sResources?: K8sResourcesType;
	nosServers?: NosServersType;
	parentId?: string;
	productionState?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	supportModel?: string;
	tenantContext?: string;
	tenantId?: string;
	tenantName?: string;
	vservers?: VserversType;
}
interface TenantType extends _TenantType { constructor: { new(): TenantType }; }

interface _TunnelTerminationpointsType extends BaseType {
	tunnelTerminationpoint?: TunnelTerminationpointType[];
}
interface TunnelTerminationpointsType extends _TunnelTerminationpointsType { constructor: { new(): TunnelTerminationpointsType }; }

interface _TunnelTerminationpointType extends BaseType {
	adminStatus?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	encoding?: string;
	interLayerlockid?: number;
	modelCustomizationid?: string;
	modelInvariantid?: string;
	modelVersionid?: string;
	name?: string;
	operStatus?: string;
	operationalStatus?: string;
	protectionType?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	selflink?: string;
	switchingCapability?: string;
	ttpId?: string;
	tunnelTpid?: string;
}
interface TunnelTerminationpointType extends _TunnelTerminationpointType { constructor: { new(): TunnelTerminationpointType }; }

interface _TunnelXconnectsType extends BaseType {
	tunnelXconnect?: TunnelXconnectType[];
}
interface TunnelXconnectsType extends _TunnelXconnectsType { constructor: { new(): TunnelXconnectsType }; }

interface _TunnelXconnectType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	id?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
}
interface TunnelXconnectType extends _TunnelXconnectType { constructor: { new(): TunnelXconnectType }; }

interface _UnisType extends BaseType {
	uni?: UniType[];
}
interface UnisType extends _UnisType { constructor: { new(): UnisType }; }

interface _UniType extends BaseType {
	bandwidthUnit?: string;
	bandwidthValue?: number;
	cvlan?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	id?: string;
	modelCustomizationid?: string;
	modelInvariantid?: string;
	modelVersionid?: string;
	operationalStatus?: string;
	provider?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	role?: string;
	selflink?: string;
	tpId?: string;
}
interface UniType extends _UniType { constructor: { new(): UniType }; }

interface _UpdateNodekeyType extends BaseType {
	keyName?: string;
	keyValue?: string;
}
interface UpdateNodekeyType extends _UpdateNodekeyType { constructor: { new(): UpdateNodekeyType }; }

interface _UpdateType extends BaseType {
	action?: ActionType[];
	updateNodekey?: UpdateNodekeyType[];
	updateNodetype?: string;
	updateNodeuri?: string;
}
interface UpdateType extends _UpdateType { constructor: { new(): UpdateType }; }

interface _ValidationAuditsType extends BaseType {
	validationAudit?: ValidationAuditType[];
}
interface ValidationAuditsType extends _ValidationAuditsType { constructor: { new(): ValidationAuditsType }; }

interface _ValidationAuditType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	validationId?: string;
	validationPhase?: string;
	validationRequestid?: string;
	validationStatus?: string;
}
interface ValidationAuditType extends _ValidationAuditType { constructor: { new(): ValidationAuditType }; }

interface _VcesType extends BaseType {
	vce?: VceType[];
}
interface VcesType extends _VcesType { constructor: { new(): VcesType }; }

interface _VceType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	entitlementResourceuuid?: string;
	entitlements?: EntitlementsType;
	equipmentRole?: string;
	heatStackid?: string;
	ipv4Loopback0address?: string;
	ipv4Oamaddress?: string;
	licenseKey?: string;
	licenses?: LicensesType;
	msoCatalogkey?: string;
	operationalStatus?: string;
	orchestrationStatus?: string;
	portGroups?: PortGroupsType;
	provStatus?: string;
	regionalResourcezone?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	serviceId?: string;
	v6Vcewanaddress?: string;
	vnfId?: string;
	vnfName?: string;
	vnfName2?: string;
	vnfType?: string;
	vpeId?: string;
}
interface VceType extends _VceType { constructor: { new(): VceType }; }

interface _VfModulesType extends BaseType {
	vfModule?: VfModuleType[];
}
interface VfModulesType extends _VfModulesType { constructor: { new(): VfModulesType }; }

interface _VfModuleType extends BaseType {
	automatedAssignment?: boolean;
	contrailServiceinstancefqdn?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	heatStackid?: string;
	isBasevfmodule?: boolean;
	modelCustomizationid?: string;
	modelInvariantid?: string;
	modelVersionid?: string;
	moduleIndex?: number;
	operationalStatus?: string;
	orchestrationStatus?: string;
	personaModelversion?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	selflink?: string;
	vfModuleid?: string;
	vfModulename?: string;
	widgetModelid?: string;
	widgetModelversion?: string;
}
interface VfModuleType extends _VfModuleType { constructor: { new(): VfModuleType }; }

interface _VigServersType extends BaseType {
	vigServer?: VigServerType[];
}
interface VigServersType extends _VigServersType { constructor: { new(): VigServersType }; }

interface _VigServerType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	ipaddressV4vig?: string[];
	ipaddressV6vig?: string[];
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	vigAddresstype?: string;
}
interface VigServerType extends _VigServerType { constructor: { new(): VigServerType }; }

interface _VipIpv4addresslistType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	isFloating?: boolean;
	neutronNetworkid?: string;
	neutronSubnetid?: string;
	opsNote?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	vipIpv4address?: string;
	vipIpv4prefixlength?: number;
	vlanIdinner?: number;
	vlanIdouter?: number;
}
interface VipIpv4addresslistType extends _VipIpv4addresslistType { constructor: { new(): VipIpv4addresslistType }; }

interface _VipIpv6addresslistType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	isFloating?: boolean;
	neutronNetworkid?: string;
	neutronSubnetid?: string;
	opsNote?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	vipIpv6address?: string;
	vipIpv6prefixlength?: number;
	vlanIdinner?: number;
	vlanIdouter?: number;
}
interface VipIpv6addresslistType extends _VipIpv6addresslistType { constructor: { new(): VipIpv6addresslistType }; }

interface _VirtualDatacentersType extends BaseType {
	virtualDatacenter?: VirtualDatacenterType[];
}
interface VirtualDatacentersType extends _VirtualDatacentersType { constructor: { new(): VirtualDatacentersType }; }

interface _VirtualDatacenterType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	vdcId?: string;
	vdcName?: string;
}
interface VirtualDatacenterType extends _VirtualDatacenterType { constructor: { new(): VirtualDatacenterType }; }

interface _VlanCharacteristicsType extends BaseType {
	vlanCharacteristic?: VlanCharacteristicType[];
}
interface VlanCharacteristicsType extends _VlanCharacteristicsType { constructor: { new(): VlanCharacteristicsType }; }

interface _VlanCharacteristicType extends BaseType {
	appliesTo?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	dhcpPool?: boolean;
	internetAccess?: boolean;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	rootName?: string;
	vlanCharacteristicid?: string;
}
interface VlanCharacteristicType extends _VlanCharacteristicType { constructor: { new(): VlanCharacteristicType }; }

interface _VlanMappingsType extends BaseType {
	vlanMapping?: VlanMappingType[];
}
interface VlanMappingsType extends _VlanMappingsType { constructor: { new(): VlanMappingsType }; }

interface _VlanMappingType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	ivlan?: string;
	nniCvlan?: string;
	nniSvlan?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	uniCvlan?: string;
	vlanMappingid?: string;
}
interface VlanMappingType extends _VlanMappingType { constructor: { new(): VlanMappingType }; }

interface _VlanRangesType extends BaseType {
	vlanRange?: VlanRangeType[];
}
interface VlanRangesType extends _VlanRangesType { constructor: { new(): VlanRangesType }; }

interface _VlanRangeType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	vlanIdlower?: number;
	vlanIdupper?: number;
	vlanRangeid?: string;
	vlanTags?: VlanTagsType;
	vlanType?: string;
}
interface VlanRangeType extends _VlanRangeType { constructor: { new(): VlanRangeType }; }

interface _VlansType extends BaseType {
	vlan?: VlanType[];
}
interface VlansType extends _VlansType { constructor: { new(): VlansType }; }

interface _VlanTagsType extends BaseType {
	vlanTag?: VlanTagType[];
}
interface VlanTagsType extends _VlanTagsType { constructor: { new(): VlanTagsType }; }

interface _VlanTagType extends BaseType {
	configPhase?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	isPrivate?: boolean;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	vlanIdinner?: number;
	vlanIdouter?: number;
	vlanTagfunction?: string;
	vlanTagid?: string;
	vlanTagrole?: string;
	vlanTagtype?: string;
}
interface VlanTagType extends _VlanTagType { constructor: { new(): VlanTagType }; }

interface _VlanType extends BaseType {
	backdoorConnection?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	inMaint?: boolean;
	isIpunnumbered?: boolean;
	isPrivate?: boolean;
	l3Interfaceipv4addresslist?: L3Interfaceipv4addresslistType[];
	l3Interfaceipv6addresslist?: L3Interfaceipv6addresslistType[];
	orchestrationStatus?: string;
	provStatus?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	speedUnits?: string;
	speedValue?: string;
	vlanDescription?: string;
	vlanIdinner?: number;
	vlanIdouter?: number;
	vlanInterface?: string;
	vlanType?: string;
	vpnKey?: string;
}
interface VlanType extends _VlanType { constructor: { new(): VlanType }; }

interface _VnfcsType extends BaseType {
	vnfc?: VnfcType[];
}
interface VnfcsType extends _VnfcsType { constructor: { new(): VnfcsType }; }

interface _VnfcType extends BaseType {
	cps?: CpsType;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	groupNotation?: string;
	inMaint?: boolean;
	ipaddressV4oamvip?: string;
	isClosedloopdisabled?: boolean;
	l3Interfaceipv4addresslist?: L3Interfaceipv4addresslistType[];
	l3Interfaceipv6addresslist?: L3Interfaceipv6addresslistType[];
	modelCustomizationid?: string;
	modelInvariantid?: string;
	modelVersionid?: string;
	nfcFunction?: string;
	nfcNamingcode?: string;
	orchestrationStatus?: string;
	provStatus?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	vnfcName?: string;
}
interface VnfcType extends _VnfcType { constructor: { new(): VnfcType }; }

interface _VnfImagesType extends BaseType {
	vnfImage?: VnfImageType[];
}
interface VnfImagesType extends _VnfImagesType { constructor: { new(): VnfImagesType }; }

interface _VnfImageType extends BaseType {
	application?: string;
	applicationVendor?: string;
	applicationVersion?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	selflink?: string;
	vnfImageuuid?: string;
}
interface VnfImageType extends _VnfImageType { constructor: { new(): VnfImageType }; }

interface _VnfType extends BaseType {
	vnfId?: string;
}
interface VnfType extends _VnfType { constructor: { new(): VnfType }; }

interface _VolumeGroupsType extends BaseType {
	volumeGroup?: VolumeGroupType[];
}
interface VolumeGroupsType extends _VolumeGroupsType { constructor: { new(): VolumeGroupsType }; }

interface _VolumeGroupType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	heatStackid?: string;
	modelCustomizationid?: string;
	orchestrationStatus?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	vfModulemodelcustomizationid?: string;
	vnfType?: string;
	volumeGroupid?: string;
	volumeGroupname?: string;
}
interface VolumeGroupType extends _VolumeGroupType { constructor: { new(): VolumeGroupType }; }

interface _VolumesType extends BaseType {
	volume?: VolumeType[];
}
interface VolumesType extends _VolumesType { constructor: { new(): VolumesType }; }

interface _VolumeType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	volumeId?: string;
	volumeSelflink?: string;
}
interface VolumeType extends _VolumeType { constructor: { new(): VolumeType }; }

interface _VplsPesType extends BaseType {
	vplsPe?: VplsPeType[];
}
interface VplsPesType extends _VplsPesType { constructor: { new(): VplsPesType }; }

interface _VplsPeType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	equipmentName?: string;
	equipmentRole?: string;
	ipv4Oamaddress?: string;
	lagInterfaces?: LagInterfacesType;
	pInterfaces?: PInterfacesType;
	provStatus?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	vlanIdouter?: number;
}
interface VplsPeType extends _VplsPeType { constructor: { new(): VplsPeType }; }

interface _VpnBindingsType extends BaseType {
	vpnBinding?: VpnBindingType[];
}
interface VpnBindingsType extends _VpnBindingsType { constructor: { new(): VpnBindingsType }; }

interface _VpnBindingType extends BaseType {
	accessClientid?: string;
	accessProviderid?: string;
	accessTopologyid?: string;
	adminStatus?: string;
	customerVpnid?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	dstAccessltpid?: string;
	dstAccessnodeid?: string;
	dstTpn?: string;
	labelModev4?: string;
	labelModev6?: string;
	maxPath?: string;
	maxPathsv4?: number;
	maxPathsv6?: number;
	maxPrefixthreshold?: number;
	maxPrefixv4?: number;
	maxPrefixv6?: number;
	modelCustomizationid?: string;
	modelInvariantid?: string;
	modelVersionid?: string;
	operationalStatus?: string;
	opsNote?: string;
	protectionType?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	routeDistinguisher?: string;
	routeTargets?: RouteTargetsType;
	sliceId?: string;
	srcAccessltpid?: string;
	srcAccessnodeid?: string;
	srcTpn?: string;
	switchingType?: string;
	vpnDescription?: string;
	vpnId?: string;
	vpnName?: string;
	vpnPlatform?: string;
	vpnRegion?: string;
	vpnType?: string;
	vxlanNetworkid?: string;
}
interface VpnBindingType extends _VpnBindingType { constructor: { new(): VpnBindingType }; }

interface _VrfsType extends BaseType {
	vrf?: VrfType[];
}
interface VrfsType extends _VrfsType { constructor: { new(): VrfsType }; }

interface _VrfType extends BaseType {
	aggregateRoutes?: AggregateRoutesType;
	bestExternal?: string;
	bgpGroups?: BgpGroupsType;
	bgpNeighbors?: BgpNeighborsType;
	configurationStatus?: string;
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	labelModev4?: string;
	labelModev6?: string;
	maxPathsv4?: number;
	maxPathsv6?: number;
	maxPrefixthresholdv4?: number;
	maxPrefixthresholdv6?: number;
	maxPrefixv4?: number;
	maxPrefixv6?: number;
	opsNote?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	routeDistinguisher?: string;
	routeTargets?: RouteTargetsType;
	v4Maxpathtype?: string;
	v6Maxpathtype?: string;
	vrfAddressfamily?: string;
	vrfDescription?: string;
	vrfFunction?: string;
	vrfGroupname?: string;
	vrfId?: string;
	vrfName?: string;
	vrfRole?: string;
	vrfType?: string;
}
interface VrfType extends _VrfType { constructor: { new(): VrfType }; }

interface _VserversType extends BaseType {
	vserver?: VserverType[];
}
interface VserversType extends _VserversType { constructor: { new(): VserversType }; }

interface _VserverType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	inMaint?: boolean;
	isClosedloopdisabled?: boolean;
	lInterfaces?: LInterfacesType;
	numa?: string;
	operationalStatus?: string;
	provStatus?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	volumes?: VolumesType;
	vserverId?: string;
	vserverName?: string;
	vserverName2?: string;
	vserverSelflink?: string;
}
interface VserverType extends _VserverType { constructor: { new(): VserverType }; }

interface _WanPortconfigsType extends BaseType {
	wanPortconfig?: WanPortconfigType[];
}
interface WanPortconfigsType extends _WanPortconfigsType { constructor: { new(): WanPortconfigsType }; }

interface _WanPortconfigType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	description?: string;
	deviceId?: string;
	devicePortid?: string;
	inputBandwidth?: string;
	ipAddress?: string;
	ipv4Address?: string;
	ipv6Address?: string;
	modelCustomizationid?: string;
	modelInvariantid?: string;
	modelVersionid?: string;
	operationalStatus?: string;
	outputBandwidth?: string;
	portNumber?: string;
	portType?: string;
	providerIpaddress?: string;
	providerIpv4address?: string;
	providerIpv6address?: string;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	selflink?: string;
	transportNetworkname?: string;
	vlanId?: string;
	wanPortconfigid?: string;
	wanPortconfigname?: string;
	wanPortid?: string;
}
interface WanPortconfigType extends _WanPortconfigType { constructor: { new(): WanPortconfigType }; }

interface _ZonesType extends BaseType {
	zone?: ZoneType[];
}
interface ZonesType extends _ZonesType { constructor: { new(): ZonesType }; }

interface _ZoneType extends BaseType {
	dataOwner?: string;
	dataSource?: string;
	dataSourceversion?: string;
	designType?: string;
	inMaint?: boolean;
	relationshipList?: RelationshipListType;
	resourceVersion?: string;
	status?: string;
	subnets?: SubnetsType;
	vlanRanges?: VlanRangesType;
	zoneContext?: string;
	zoneFunction?: string;
	zoneId?: string;
	zoneName?: string;
	zoneNumber?: number;
	zoneRole?: string;
	zoneType?: string;
}
interface ZoneType extends _ZoneType { constructor: { new(): ZoneType }; }

export interface document extends BaseType {
	aaiInternal: AaiInternalType;
	action: ActionType;
	actionData: ActionDataType;
	actions: ActionsType;
	activities: ActivitiesType;
	activity: ActivityType;
	activityState: ActivityStateType;
	activityStates: ActivityStatesType;
	addressFamilies: AddressFamiliesType;
	addressFamily: AddressFamilyType;
	aggregateRoute: AggregateRouteType;
	aggregateRoutes: AggregateRoutesType;
	aggregatedEtheroption: AggregatedEtheroptionType;
	aggregatedEtheroptions: AggregatedEtheroptionsType;
	allottedResource: AllottedResourceType;
	allottedResources: AllottedResourcesType;
	autonomousSystem: AutonomousSystemType;
	autonomousSystems: AutonomousSystemsType;
	availabilityZone: AvailabilityZoneType;
	availabilityZones: AvailabilityZonesType;
	availableBandwidth: AvailableBandwidthType;
	availableBandwidthmap: AvailableBandwidthmapType;
	azAnddvsswitches: AzAnddvsswitchesType;
	bandwidthAttribute: BandwidthAttributeType;
	bandwidthAttributes: BandwidthAttributesType;
	bfd: BfdType;
	bfds: BfdsType;
	bgpGroup: BgpGroupType;
	bgpGroups: BgpGroupsType;
	bgpNeighbor: BgpNeighborType;
	bgpNeighbors: BgpNeighborsType;
	business: BusinessType;
	cable: CableType;
	cables: CablesType;
	card: CardType;
	cardSlot: CardSlotType;
	cardSlots: CardSlotsType;
	cards: CardsType;
	cell: CellType;
	cells: CellsType;
	chassies: ChassiesType;
	chassis: ChassisType;
	classMap: ClassMapType;
	classMapmember: ClassMapmemberType;
	classMapmembers: ClassMapmembersType;
	classMaps: ClassMapsType;
	classOfservice: ClassOfserviceType;
	classesOfservice: ClassesOfserviceType;
	cloudInfrastructure: CloudInfrastructureType;
	cloudRegion: CloudRegionType;
	cloudRegions: CloudRegionsType;
	collection: CollectionType;
	collections: CollectionsType;
	common: CommonType;
	communicationServiceprofile: CommunicationServiceprofileType;
	communicationServiceprofiles: CommunicationServiceprofilesType;
	communityList: CommunityListType;
	complex: ComplexType;
	complexes: ComplexesType;
	composedResource: ComposedResourceType;
	composedResources: ComposedResourcesType;
	configuration: ConfigurationType;
	configurations: ConfigurationsType;
	connectivities: ConnectivitiesType;
	connectivity: ConnectivityType;
	connector: ConnectorType;
	connectors: ConnectorsType;
	constrainedElementset: ConstrainedElementsetType;
	constrainedElementsets: ConstrainedElementsetsType;
	contact: ContactType;
	contacts: ContactsType;
	cp: CpType;
	cps: CpsType;
	ctagAssignment: CtagAssignmentType;
	ctagAssignments: CtagAssignmentsType;
	ctagPool: CtagPoolType;
	ctagPools: CtagPoolsType;
	customer: CustomerType;
	customers: CustomersType;
	cvlanTagentry: CvlanTagentryType;
	cvlanTags: CvlanTagsType;
	device: DeviceType;
	devices: DevicesType;
	dhcpService: DhcpServiceType;
	dhcpServices: DhcpServicesType;
	dvsSwitch: DvsSwitchType;
	dvsSwitches: DvsSwitchesType;
	edgePropnames: EdgePropnamesType;
	edgeTagqueryrequest: EdgeTagqueryrequestType;
	edgeTagqueryresult: EdgeTagqueryresultType;
	elementChoiceset: ElementChoicesetType;
	elementChoicesets: ElementChoicesetsType;
	endpoint: EndpointType;
	endpoints: EndpointsType;
	entitlement: EntitlementType;
	entitlements: EntitlementsType;
	esi: EsiType;
	esis: EsisType;
	esrEms: EsrEmsType;
	esrEmslist: EsrEmslistType;
	esrNfvo: EsrNfvoType;
	esrNfvolist: EsrNfvolistType;
	esrSysteminfo: EsrSysteminfoType;
	esrSysteminfolist: EsrSysteminfolistType;
	esrThirdpartysdnc: EsrThirdpartysdncType;
	esrThirdpartysdnclist: EsrThirdpartysdnclistType;
	esrVnfm: EsrVnfmType;
	esrVnfmlist: EsrVnfmlistType;
	evc: EvcType;
	evcs: EvcsType;
	extAainetwork: ExtAainetworkType;
	extAainetworks: ExtAainetworksType;
	externalSystem: ExternalSystemType;
	extraProperties: ExtraPropertiesType;
	extraProperty: ExtraPropertyType;
	flavor: FlavorType;
	flavors: FlavorsType;
	forwarder: ForwarderType;
	forwarderEvc: ForwarderEvcType;
	forwarderEvcs: ForwarderEvcsType;
	forwarders: ForwardersType;
	forwardingPath: ForwardingPathType;
	forwardingPaths: ForwardingPathsType;
	fqdn: FqdnType;
	fqdns: FqdnsType;
	genericVnf: GenericVnfType;
	genericVnfs: GenericVnfsType;
	geoRegion: GeoRegionType;
	geoRegions: GeoRegionsType;
	gigEtheroption: GigEtheroptionType;
	gigEtheroptions: GigEtheroptionsType;
	groupAssignment: GroupAssignmentType;
	groupAssignments: GroupAssignmentsType;
	hardwareCatalogitem: HardwareCatalogitemType;
	hardwareCatalogitems: HardwareCatalogitemsType;
	holdTimer: HoldTimerType;
	holdTimers: HoldTimersType;
	hostAggregate: HostAggregateType;
	hostAggregates: HostAggregatesType;
	hostRoute: HostRouteType;
	hostRoutes: HostRoutesType;
	hpaCapabilities: HpaCapabilitiesType;
	hpaCapability: HpaCapabilityType;
	hpaCapacity: HpaCapacityType;
	hpaFeatureattributes: HpaFeatureattributesType;
	hwComponent: HwComponentType;
	hwComponents: HwComponentsType;
	icmpUnreachable: IcmpUnreachableType;
	icmpUnreachables: IcmpUnreachablesType;
	image: ImageType;
	images: ImagesType;
	includeNodefilter: IncludeNodefilterType;
	instanceFilter: InstanceFilterType;
	instanceFilters: InstanceFiltersType;
	instanceGroup: InstanceGroupType;
	instanceGroups: InstanceGroupsType;
	interlayerAttachment: InterlayerAttachmentType;
	interlayerAttachments: InterlayerAttachmentsType;
	inventory: InventoryType;
	inventoryItem: InventoryItemType;
	inventoryItemdata: InventoryItemdataType;
	inventoryResponseitem: InventoryResponseitemType;
	inventoryResponseitems: InventoryResponseitemsType;
	ipAddresslist: IpAddresslistType;
	ipsecConfiguration: IpsecConfigurationType;
	ipsecConfigurations: IpsecConfigurationsType;
	k8sResource: K8sResourceType;
	k8sResources: K8sResourcesType;
	keyData: KeyDataType;
	lInterface: LInterfaceType;
	lInterfaces: LInterfacesType;
	l3Interfaceipv4addresslist: L3Interfaceipv4addresslistType;
	l3Interfaceipv6addresslist: L3Interfaceipv6addresslistType;
	l3Network: L3NetworkType;
	l3Networks: L3NetworksType;
	labelRestriction: LabelRestrictionType;
	labelRestrictions: LabelRestrictionsType;
	lacp: LacpType;
	lacps: LacpsType;
	lagInterface: LagInterfaceType;
	lagInterfaces: LagInterfacesType;
	lagLink: LagLinkType;
	lagLinks: LagLinksType;
	lanPortconfig: LanPortconfigType;
	lanPortconfigs: LanPortconfigsType;
	license: LicenseType;
	licenses: LicensesType;
	lineOfbusiness: LineOfbusinessType;
	linesOfbusiness: LinesOfbusinessType;
	logicalLink: LogicalLinkType;
	logicalLinks: LogicalLinksType;
	mapping: MappingType;
	mappings: MappingsType;
	metadata: MetadataType;
	metadatum: MetadatumType;
	model: ModelType;
	modelAndnamedquerysearch: ModelAndnamedquerysearchType;
	modelConstraint: ModelConstraintType;
	modelConstraints: ModelConstraintsType;
	modelElement: ModelElementType;
	modelElements: ModelElementsType;
	modelVer: ModelVerType;
	modelVers: ModelVersType;
	models: ModelsType;
	multicastConfiguration: MulticastConfigurationType;
	multicastConfigurations: MulticastConfigurationsType;
	namedQueries: NamedQueriesType;
	namedQuery: NamedQueryType;
	namedQueryelement: NamedQueryelementType;
	namedQueryelements: NamedQueryelementsType;
	neighbour: NeighbourType;
	neighbours: NeighboursType;
	network: NetworkType;
	networkPolicies: NetworkPoliciesType;
	networkPolicy: NetworkPolicyType;
	networkProfile: NetworkProfileType;
	networkProfiles: NetworkProfilesType;
	networkRange: NetworkRangeType;
	networkRanges: NetworkRangesType;
	networkResource: NetworkResourceType;
	networkResources: NetworkResourcesType;
	networkRoute: NetworkRouteType;
	networkRoutes: NetworkRoutesType;
	networkTechnologies: NetworkTechnologiesType;
	networkTechnology: NetworkTechnologyType;
	newvce: NewvceType;
	newvces: NewvcesType;
	nextHop: NextHopType;
	nextHops: NextHopsType;
	nosServer: NosServerType;
	nosServers: NosServersType;
	notificationEvent: NotificationEventType;
	notificationEventheader: NotificationEventheaderType;
	notify: NotifyType;
	oamNetwork: OamNetworkType;
	oamNetworks: OamNetworksType;
	objectGroup: ObjectGroupType;
	objectGroupkeyterm: ObjectGroupkeytermType;
	objectGroupkeyterms: ObjectGroupkeytermsType;
	objectGroupmember: ObjectGroupmemberType;
	objectGroupmembers: ObjectGroupmembersType;
	objectGroups: ObjectGroupsType;
	operationalEnvironment: OperationalEnvironmentType;
	operationalEnvironments: OperationalEnvironmentsType;
	overloadedModel: OverloadedModelType;
	owningEntities: OwningEntitiesType;
	owningEntity: OwningEntityType;
	pInterface: PInterfaceType;
	pInterfaces: PInterfacesType;
	parameterList: ParameterListType;
	parameterLists: ParameterListsType;
	pdu: PduType;
	pdus: PdusType;
	physicalLink: PhysicalLinkType;
	physicalLinks: PhysicalLinksType;
	platform: PlatformType;
	platforms: PlatformsType;
	pluggable: PluggableType;
	pluggableSlot: PluggableSlotType;
	pluggableSlots: PluggableSlotsType;
	pluggables: PluggablesType;
	pnf: PnfType;
	pnfs: PnfsType;
	policies: PoliciesType;
	policy: PolicyType;
	policyKeyterm: PolicyKeytermType;
	policyKeyterms: PolicyKeytermsType;
	policyMapmember: PolicyMapmemberType;
	policyMapmembers: PolicyMapmembersType;
	port: PortType;
	portGroup: PortGroupType;
	portGroups: PortGroupsType;
	portList: PortListType;
	ports: PortsType;
	profile: ProfileType;
	profiles: ProfilesType;
	project: ProjectType;
	projects: ProjectsType;
	properties: PropertiesType;
	propertyConstraint: PropertyConstraintType;
	propertyConstraints: PropertyConstraintsType;
	pserver: PserverType;
	pservers: PserversType;
	queryParameters: QueryParametersType;
	rack: RackType;
	rackUnit: RackUnitType;
	rackUnits: RackUnitsType;
	racks: RacksType;
	relatedLookup: RelatedLookupType;
	relatedLookups: RelatedLookupsType;
	relatedToproperty: RelatedTopropertyType;
	relationship: RelationshipType;
	relationshipComponent: RelationshipComponentType;
	relationshipComponents: RelationshipComponentsType;
	relationshipData: RelationshipDataType;
	relationshipList: RelationshipListType;
	relationshipProperties: RelationshipPropertiesType;
	relationshipRule: RelationshipRuleType;
	relationshipRules: RelationshipRulesType;
	reservedPropnames: ReservedPropnamesType;
	responseList: ResponseListType;
	resultData: ResultDataType;
	routeTablereference: RouteTablereferenceType;
	routeTablereferences: RouteTablereferencesType;
	routeTarget: RouteTargetType;
	routeTargets: RouteTargetsType;
	routingInstance: RoutingInstanceType;
	routingInstances: RoutingInstancesType;
	rule: RuleType;
	rules: RulesType;
	sdnZoneresponse: SdnZoneresponseType;
	sdwanVpn: SdwanVpnType;
	sdwanVpns: SdwanVpnsType;
	search: SearchType;
	searchResults: SearchResultsType;
	secondaryFilt: SecondaryFiltType;
	secondaryFilter: SecondaryFilterType;
	secondaryFilts: SecondaryFiltsType;
	segmentationAssignment: SegmentationAssignmentType;
	segmentationAssignments: SegmentationAssignmentsType;
	selectorList: SelectorListType;
	service: ServiceType;
	serviceCapabilities: ServiceCapabilitiesType;
	serviceCapability: ServiceCapabilityType;
	serviceDesignandcreation: ServiceDesignandcreationType;
	serviceInstance: ServiceInstanceType;
	serviceInstances: ServiceInstancesType;
	serviceProfile: ServiceProfileType;
	serviceProfiles: ServiceProfilesType;
	serviceSubscription: ServiceSubscriptionType;
	serviceSubscriptions: ServiceSubscriptionsType;
	services: ServicesType;
	sitePair: SitePairType;
	sitePairset: SitePairsetType;
	sitePairsets: SitePairsetsType;
	sitePairs: SitePairsType;
	siteResource: SiteResourceType;
	siteResources: SiteResourcesType;
	sliceProfile: SliceProfileType;
	sliceProfiles: SliceProfilesType;
	snapshot: SnapshotType;
	snapshots: SnapshotsType;
	softwareVersion: SoftwareVersionType;
	softwareVersions: SoftwareVersionsType;
	spPartner: SpPartnerType;
	spPartners: SpPartnersType;
	sriovPf: SriovPfType;
	sriovPfs: SriovPfsType;
	sriovVf: SriovVfType;
	sriovVfs: SriovVfsType;
	startNodefilter: StartNodefilterType;
	subnet: SubnetType;
	subnets: SubnetsType;
	swComponent: SwComponentType;
	swComponents: SwComponentsType;
	taggedInventoryitemlist: TaggedInventoryitemlistType;
	teLinkattribute: TeLinkattributeType;
	teLinkattributes: TeLinkattributesType;
	temporaryParameterlist: TemporaryParameterlistType;
	temporaryParameterlists: TemporaryParameterlistsType;
	tenant: TenantType;
	tenants: TenantsType;
	tunnelTerminationpoint: TunnelTerminationpointType;
	tunnelTerminationpoints: TunnelTerminationpointsType;
	tunnelXconnect: TunnelXconnectType;
	tunnelXconnects: TunnelXconnectsType;
	uni: UniType;
	unis: UnisType;
	update: UpdateType;
	updateNodekey: UpdateNodekeyType;
	validationAudit: ValidationAuditType;
	validationAudits: ValidationAuditsType;
	vce: VceType;
	vces: VcesType;
	vfModule: VfModuleType;
	vfModules: VfModulesType;
	vigServer: VigServerType;
	vigServers: VigServersType;
	vipIpv4addresslist: VipIpv4addresslistType;
	vipIpv6addresslist: VipIpv6addresslistType;
	virtualDatacenter: VirtualDatacenterType;
	virtualDatacenters: VirtualDatacentersType;
	vlan: VlanType;
	vlanCharacteristic: VlanCharacteristicType;
	vlanCharacteristics: VlanCharacteristicsType;
	vlanMapping: VlanMappingType;
	vlanMappings: VlanMappingsType;
	vlanRange: VlanRangeType;
	vlanRanges: VlanRangesType;
	vlanTag: VlanTagType;
	vlanTags: VlanTagsType;
	vlans: VlansType;
	vnf: VnfType;
	vnfImage: VnfImageType;
	vnfImages: VnfImagesType;
	vnfc: VnfcType;
	vnfcs: VnfcsType;
	volume: VolumeType;
	volumeGroup: VolumeGroupType;
	volumeGroups: VolumeGroupsType;
	volumes: VolumesType;
	vplsPe: VplsPeType;
	vplsPes: VplsPesType;
	vpnBinding: VpnBindingType;
	vpnBindings: VpnBindingsType;
	vrf: VrfType;
	vrfs: VrfsType;
	vserver: VserverType;
	vservers: VserversType;
	wanPortconfig: WanPortconfigType;
	wanPortconfigs: WanPortconfigsType;
	zone: ZoneType;
	zones: ZonesType;
}
export var document: document;
